import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RadioButton } from ".";

export default {
  title: "Component/Radio",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Standard = Template.bind({});
Standard.args = { label: "Radio", name: "radio", checked: false };

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  name: "disabled",
  checked: false,
  disabled: true,
};
