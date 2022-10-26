import { fetchFruit, convert } from "../fruit";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("converts correctly", async () => {
  const rates = await convert("USD", "CAD");

  expect(rates).toEqual(1.42);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `https://api.exchangeratesapi.io/latest?base=USD`
  );
});

it("catches errors and returns null", async () => {
  fetch.mockImplementationOnce(() => Promise.reject("API failure"));

  const rates = await convert("USD", "CAD");

  expect(rates).toEqual(null);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `https://api.exchangeratesapi.io/latest?base=USD`
  );
});
