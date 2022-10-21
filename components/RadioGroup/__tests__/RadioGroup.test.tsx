import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { RadioButton } from "../RadioButton";
import { RadioGroup } from "../RadioGroup";

describe("RadioGroup test", () => {
  test("render RadioGroup component", () => {
    const { asFragment } = render(
      <RadioGroup label="Gender" defaultValue="female">
        <RadioButton value="female" label="Female" />
        <RadioButton value="male" label="Male" />
      </RadioGroup>
    );
    // screen.debug(asFragment());
    expect(asFragment()).toMatchSnapshot();
  });

  test("RadioGroup change event", async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(
      <RadioGroup label="Gender" defaultValue="female" onChange={handleChange}>
        <RadioButton value="female" label="Female" />
        <RadioButton value="male" label="Male" />
      </RadioGroup>
    );

    const elementM = screen.getByDisplayValue("male");
    const elementF = screen.getByDisplayValue("female");
    await user.click(elementM);
    expect(elementM).toBeChecked();
    // expect(elementM.checked).toEqual(true);
    expect(elementF.checked).toEqual(false);
    // screen.debug(elementM);
    // screen.debug(elementF);
  });

  test("RadioGroup with disabled option", () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    render(
      <RadioGroup label="Test" defaultValue="a">
        <RadioButton value="a" label="A" />
        <RadioButton value="b" label="B" disabled />
        <RadioButton value="c" label="C" />
      </RadioGroup>
    );

    const elementA = screen.getByDisplayValue("a");
    const elementB = screen.getByDisplayValue("b");
    const elementC = screen.getByDisplayValue("c");

    // await userEvent.click(elementB);
    //Qn: Error: Unable to perform pointer interaction as the element has `pointer-events: none`:

    expect(elementA).toBeChecked();
    expect(elementB).toBeDisabled();
    expect(elementC.checked).toEqual(false);
  });

  test("have focus", async () => {
    render(
      <RadioGroup label="Test" defaultValue="a">
        <RadioButton value="a" label="A" />
        <RadioButton value="b" label="B" disabled />
        <RadioButton value="c" label="C" />
      </RadioGroup>
    );

    const elementA = screen.getByDisplayValue("a");
    const elementB = screen.getByDisplayValue("b");
    const elementC = screen.getByDisplayValue("c");

    await userEvent.tab();
    expect(elementA).toHaveFocus();

    await userEvent.tab();
    expect(elementC).toHaveFocus();
  });
});
