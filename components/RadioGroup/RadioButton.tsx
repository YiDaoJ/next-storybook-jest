import clsx from "clsx";
import React, { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import RadioGroupContext from "./context";

interface RadioButtonProps extends RadioButtonStyleProps {
  label: string;
  value: string;
}

interface RadioButtonStyleProps {
  disabled?: boolean;
}

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  value,
  disabled,
}) => {
  const { selected, onChange } = useContext(RadioGroupContext);

  return (
    <label
      className={clsx(
        "relative mb-4 inline-flex",
        disabled
          ? "cursor-not-allowed text-gray"
          : "cursor-pointer text-black dark:text-silver"
      )}
    >
      <span className="radio-input">
        <input
          type="radio"
          name={value}
          onChange={onChange}
          value={value}
          checked={selected === value}
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
                  "focus:before:border-black focus:before:outline-none dark:focus:before:border-white", // COOL:order of peseudo class or elements doesn't matter
                  "hover:before:border-black hover:before:dark:border-white",
                  " after:absolute after:top-1/2 after:left-0 ",
                  "after:-translate-1/4 after:-translate-y-1/2",
                  "checked:after:rounded-full checked:after:border-6 checked:after:border-solid checked:after:border-danger",
                  "checked:after:origin-top-left checked:after:-translate-y-1/2 checked:after:translate-x-38",
                ]
          )}
        />
      </span>
      <span className="radio-label">{label}</span>
    </label>
  );
};

// ------ input -------
// const StyledInput = styled.input`

//   ::before {
//     box-shadow: 0.0625rem 0.0625rem transparent,
//       -0.0625rem -0.0625rem transparent, 0.0625rem -0.0625rem transparent,
//       -0.0625rem 0.0625rem transparent;
//   }

// const inputActive = css`
//   cursor: pointer;
//   :focus::before {
//     box-shadow: 0 0 0 0.3125rem rgb(108 118 126 / 24%);
//   }
