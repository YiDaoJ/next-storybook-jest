import { screen, render, queryByDisplayValue } from "@testing-library/react";
import { RadioButton, RadioGroup } from "../../components";
import { fetchFruit } from "../fruit";

const fruits = ["Apfel", "Birne", "Erdbeere"];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ fruits: ["Apfel", "Birne", "Erdbeere"] }),
  })
);

// reset mocks
beforeEach(() => {
  fetch.mockClear();
});

it("fetch fruits and render", async () => {
  expect(
    queryByDisplayValue(document.documentElement, "Apfel")
  ).not.toBeInTheDocument();

  const data = await fetchFruit();

  expect(data).toEqual(fruits);
  expect(fetch).toHaveBeenCalledTimes(1);

  const handleChange = jest.fn();
  render(
    <RadioGroup onChange={handleChange}>
      {data?.map((fruit) => (
        <RadioButton value={fruit} label={fruit} key={fruit} />
      ))}
    </RadioGroup>
  );

  expect(screen.getByDisplayValue("Apfel")).toBeInTheDocument();
});

it("handles rejection", async () => {
  fetch.mockImplementationOnce(() => Promise.reject("API failure"));

  const data = await fetchFruit();
  expect(data).toEqual(null);
  expect(fetch).toHaveBeenCalledWith("http://localhost:4000/fruits");

  render(
    <RadioGroup>
      {data?.map((fruit) => (
        <RadioButton value={fruit} label={fruit} key={fruit} />
      ))}
    </RadioGroup>
  );

  // screen.getByDisplayValue("Apfel") => TestingLibraryElementError: Unable to find an element with the display value: Apfel.
  // screen.findByDisplayValue("Apfel") => received value must be an HTMLElement or an SVGElement.
  expect(screen.queryByDisplayValue("Apfel")).not.toBeInTheDocument();
});
