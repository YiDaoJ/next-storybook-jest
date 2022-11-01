import { queryByDisplayValue, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioButton, RadioGroup } from "../../components";
import { fetchFrameworks, selectFramework } from "../framework";

const frameworks = ["vue", "react", "angular", "svelte"];

// reset mocks
beforeEach(() => {
  fetch.mockClear();
});

describe("fetch frameworks", () => {
  it("fetch frameworks", async () => {
    // check if component exists
    expect(
      queryByDisplayValue(document.documentElement, "Apfel")
    ).not.toBeInTheDocument();

    // mock fetch response
    fetch.mockResponseOnce(
      JSON.stringify({ frameworks: ["vue", "react", "angular", "svelte"] })
    );

    const data = await fetchFrameworks();

    expect(data).toEqual(frameworks);
    expect(fetch).toHaveBeenCalledTimes(1);

    // check render
    const handleChange = jest.fn();
    render(
      <RadioGroup onChange={handleChange}>
        {data?.map((framework) => (
          <RadioButton value={framework} label={framework} key={framework} />
        ))}
      </RadioGroup>
    );

    expect(screen.getByDisplayValue("react")).toBeInTheDocument();
  });

  it("handle reject", async () => {
    fetch.mockReject(() => "API failure");

    const data = await fetchFrameworks();
    expect(data).toEqual(null);

    render(
      <RadioGroup>
        {data?.map((framework) => (
          <RadioButton value={framework} label={framework} key={framework} />
        ))}
      </RadioGroup>
    );

    expect(screen.queryByDisplayValue("react")).not.toBeInTheDocument();
  });
});

describe("select framework", () => {
  it("send selection request", async () => {
    // render components
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(
      <RadioGroup label="Framework" defaultValue="vue" onChange={handleChange}>
        {frameworks.map((framework) => (
          <RadioButton value={framework} label={framework} key={framework} />
        ))}
      </RadioGroup>
    );

    const elemVue = screen.getByDisplayValue("vue");
    const elemSvelte = screen.getByDisplayValue("svelte");
    expect(elemVue).toBeChecked();
    expect(elemSvelte).not.toBeChecked();

    // trigger user event
    await user.click(elemSvelte);

    // mork responce
    fetch.mockResponseOnce(JSON.stringify({ data: "You've choosen svelte!" }));

    const data = await selectFramework({ selected: "svelte" });

    expect(data).toEqual({ data: "You've choosen svelte!" });
    expect(fetch).toHaveBeenCalledTimes(1);

    // check component state
    expect(elemSvelte).toBeChecked();
    expect(elemVue).not.toBeChecked();
  });

  it("handle selection reject", async () => {
    fetch.mockReject(() => "API failure");

    const data = await selectFramework({ selected: "svelte" });

    expect(data).toEqual(null);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
