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

it("fetch fruits", async () => {
  const data = await fetchFruit();

  expect(data).toEqual(fruits);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it("handles rejection", async () => {
  fetch.mockImplementationOnce(() => Promise.reject("API failure"));

  const data = await fetchFruit();
  expect(data).toEqual(null);
  expect(fetch).toHaveBeenCalledWith("http://localhost:4000/fruits");
});
