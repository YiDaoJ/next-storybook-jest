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
      "px-6 py-3",
      "cursor-pointer rounded-2xl shadow-inner",
      "transition-all duration-500",
      "hover:opacity-90",
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
      return "bg-warning text-gray";
    default:
      return "";
  }
};

Button.defaultProps = {
  color: "primary",
};
