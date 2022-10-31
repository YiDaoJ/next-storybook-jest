import clsx from "clsx";
import React, { ChangeEvent, FC, useEffect, useState } from "react";

interface RadioButtonProps {
  checked?: boolean;
  label: string;
  name: string;
  disabled?: boolean;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
}

export const RadioButton: FC<RadioButtonProps> = ({
  checked,
  label,
  name,
  onChange,
  disabled = false,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }

    setIsChecked(event.target.checked);
  };

  return (
    <label
      className={clsx(
        "relative mb-4 inline-flex",
        disabled ? "cursor-not-allowed text-gray" : "cursor-pointer"
      )}
    >
      <span className="radio-input">
        <input
          type="radio"
          name={name}
          onChange={handleChange}
          checked={isChecked}
          disabled={disabled}
          className={clsx(
            "relative inline-block appearance-none",
            "mb-[5px] mt-3 h-px pl-8",
            "rounded-lg border-transparent outline-none",
            "before:absolute before:top-1/2 before:left-0 before:h-[21px] before:w-[21px]",
            "before:translate-x-0 before:-translate-y-1/2",
            "before:rounded-full before:border before:border-solid before:border-gray",
            disabled
              ? "pointer-events-none"
              : [
                  "cursor-pointer",
                  "focus:before:border-black focus:before:outline-none",
                  "hover:before:border-black",
                  " after:absolute after:top-1/2 after:left-0 ",
                  "after:-translate-1/4 after:-translate-y-1/2",
                  "checked:after:rounded-full checked:after:border-6 checked:after:border-solid checked:after:border-red",
                  "checked:after:origin-top-left checked:after:-translate-y-1/2 checked:after:translate-x-38",
                ]
          )}
        />
      </span>
      <span className="radio-label">{label}</span>
    </label>
  );
};
