import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { RadioButton as Radio } from "..";

describe("Radio test", () => {
  test("render Radio component", () => {
    const handleChange = jest.fn();
    const { asFragment } = render(
      <Radio label="Test" name="test" checked={false} onChange={handleChange} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("Radio change event", async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(<Radio label="Test" name="test" checked onChange={handleChange} />);

    // const input = screen.getByRole("input");
    //  Unable to find an accessible element with the role "input"
    // Qn: difference between userEvent and fireEvent

    const element = screen.getByLabelText("Test");
    // screen.debug(element);
    await user.click(element);
    expect(element).toBeChecked();
    // screen.debug(element);
  });

  test("disabled Radio", () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(
      <Radio
        label="TestDisabled"
        name="test-disabled"
        onChange={handleChange}
        disabled
      />
    );

    const element = screen.getByLabelText("TestDisabled");

    // Qn:
    // await user.click(element);
    // // Error: Unable to perform pointer interaction as the element has `pointer-events: none`:
    // expect(elementF.checked).toEqual(false);

    // screen.debug(element);
    expect(element).toBeDisabled();
  });
});
