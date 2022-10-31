import clsx from "clsx";
import React, { FC, MouseEvent, PropsWithChildren } from "react";

export type Color = "primary" | "secondary" | "danger" | "warning";

export interface ButtonProps {
  color?: Color;
  onClick(event: MouseEvent<HTMLButtonElement>): void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  color,
  children,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={clsx(
      "flex items-center justify-center justify-self-center",
      "cursor-pointer",
      getColor(color)
    )}
  >
    {children}
  </button>
);

export const getColor = (color?: Color): string => {
  switch (color) {
    case "primary":
      return "bg-purple text-silver";
    case "secondary":
      return "text-gray";
    case "danger":
      return "bg-danger text-silver";
    case "warning":
      return "bg-warning text-silver";
    default:
      return "";
  }
};

// export const Button = styled.button<Props>`
/* all: unset;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  font-size: 1.6rem;
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;

  transition: all 0.4s ease;
  &:hover {
    opacity: 0.9;
  }

  box-shadow: 0.5vmin 0.5vmin 1vmin #c8d0e7, -0.5vmin -0.5vmin 1vmin #fff;
  &:active {
    box-shadow: 0.5vmin 0.5vmin 1vmin #c8d0e7 inset,
      -0.5vmin -0.5vmin 1vmin #fff inset;
  }

`; */

Button.defaultProps = {
  color: "primary",
};
