import clsx from "clsx";
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
        <label className={clsx("radio-group__label", "mb-2 block text-gray ")}>
          {label}
        </label>
      )}
      <RadioGroupContext.Provider
        value={{ name, onChange: handleChange, selected: value }}
      >
        <div
          className={clsx(
            "radio-group__control",
            "flex",
            horizontal ? "flex-row justify-start gap-8" : "flex-col"
          )}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    </div>
  );
};
