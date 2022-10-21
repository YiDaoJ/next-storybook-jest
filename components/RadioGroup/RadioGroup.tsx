import { css } from "@emotion/react";
import React, { ChangeEvent, FC, PropsWithChildren, useState } from "react";
import RadioGroupContext from "./context";

interface RadioGroupStyleProps {
  horizontal?: boolean;
}

interface RadioGroupProps extends RadioGroupStyleProps {
  label?: string;
  name?: string;
  defaultValue?: string;
  onChange?(value: string): void;
}

export const RadioGroup: FC<PropsWithChildren<RadioGroupProps>> = ({
  label,
  name,
  defaultValue,
  onChange,
  horizontal,
  children,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    if (onChange) {
      onChange(event.currentTarget.value);
    }
  };

  return (
    <div className="radio-group__container" data-testid="radio-group">
      {label && (
        <label className="radio-group__label" css={GroupLabelStyle}>
          {label}
        </label>
      )}
      <RadioGroupContext.Provider
        value={{ name, onChange: handleChange, selected: value }}
      >
        <div
          className="radio-group__control"
          css={horizontal ? GroupControlHorizontal : GroupControlVertical}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    </div>
  );
};

const GroupLabelStyle = css`
  display: block;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.011875rem;
  margin-bottom: 0.5rem;
  color: #6c767e;
  font-family: Verdana, Arial, sans-serif;
`;

const GroupControlHorizontal = css`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: flex-start;
`;

const GroupControlVertical = css`
  display: flex;
  flex-direction: column;
`;
