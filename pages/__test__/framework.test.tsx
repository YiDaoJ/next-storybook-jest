import { fetchFrameworks, selectFramework } from "../framework";

const frameworks = ["vue", "react", "angular", "svelte"];

// reset mocks
beforeEach(() => {
  fetch.mockClear();
});

describe("fetch frameworks", () => {
  it("fetch frameworks", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({ frameworks: ["vue", "react", "angular", "svelte"] })
    );

    const data = await fetchFrameworks();

    expect(data).toEqual(frameworks);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("handle reject", async () => {
    fetch.mockReject(() => "API failure");

    const data = await fetchFrameworks();
    expect(data).toEqual(null);
  });
});

describe("select framework", () => {
  it("send selection request", async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "You've choosen svelte!" }));

    const data = await selectFramework({ selected: "svelte" });

    expect(data).toEqual({ data: "You've choosen svelte!" });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("handle selection reject", async () => {
    fetch.mockReject(() => "API failure");

    const data = await selectFramework({ selected: "svelte" });

    expect(data).toEqual(null);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
