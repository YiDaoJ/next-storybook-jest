import { css } from "@emotion/react";
import styled from "@emotion/styled";
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
    <RadioWrapper disabled={disabled}>
      <span className="radio-input">
        <StyledInput
          type="radio"
          name={value}
          onChange={onChange}
          value={value}
          checked={selected === value}
          disabled={disabled}
        />
      </span>
      <span className="radio-label" css={labelStyle}>
        {label}
      </span>
    </RadioWrapper>
  );
};

// ------ wrapper -------
const RadioWrapper = styled.label<RadioButtonStyleProps>`
  display: inline-flex;
  margin-bottom: 1rem;
  position: relative;

  ${({ disabled }) => disabled && wrapperDisabled};
`;

const wrapperDisabled = css`
  color: #6c767e;
  cursor: not-allowed;
`;

// ------ input -------
const StyledInput = styled.input`
  appearance: none !important;
  margin-bottom: 0.3125rem;
  border-color: transparent;
  margin-top: 0.7rem;

  border-radius: 0.3125rem;
  display: inline-block;
  position: relative;
  padding-left: 2rem;
  outline: none;
  height: 1px;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0%, -50%);
    width: 1.3125rem;
    height: 1.3125rem;
    border: 0.0625rem solid #6c767e;
    box-shadow: 0.0625rem 0.0625rem transparent,
      -0.0625rem -0.0625rem transparent, 0.0625rem -0.0625rem transparent,
      -0.0625rem 0.0625rem transparent;
    border-radius: 100%;
  }

  ${({ disabled }) => (disabled ? inputDisabled : inputActive)};
`;

const inputDisabled = css`
  pointer-events: none;
`;

const inputActive = css`
  cursor: pointer;
  :focus::before {
    border: 0.0625rem solid #000;
    outline: none;
    box-shadow: 0 0 0 0.3125rem rgb(108 118 126 / 24%);
  }

  :hover::before {
    border: 0.0625rem solid #000;
  }

  ::after {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-20%, -50%);
    content: "";
  }

  :checked {
    ::after {
      position: absolute;
      top: 50%;
      left: 0;
      display: block;
      border: 0.375rem solid #e00;
      border-radius: 100%;
      transform-origin: 0 0;
      transform: translate(38%, -50%);
      content: "";
    }
  }
`;

// ------ label -------
const labelStyle = css`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.011875rem;
  font-family: Verdana, Arial, sans-serif;
`;
