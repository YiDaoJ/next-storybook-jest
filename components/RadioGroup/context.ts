import React from "react";

export interface RadioGroupContextValue {
  name: string | undefined;
  selected: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value?: string
  ) => void;
}

const RadioGroupContext = React.createContext<
  RadioGroupContextValue | undefined
>(undefined);

export default RadioGroupContext;
