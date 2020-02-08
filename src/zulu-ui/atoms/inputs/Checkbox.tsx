import * as React from "react";
import { ZuluColorNames } from "./Colors";
import Checkbox from "@material-ui/core/Checkbox";
import { ZuluFormControlLabel } from "./Form";
export interface ZuluCheckboxProps {
  disabled?: boolean;
  checked: boolean;
  required?: boolean;
  color?: ZuluColorNames;
  onChange: (newValue: boolean) => void;
  label?: string;
}

const ZuluCheckbox = ({ label, onChange, ...rest }: ZuluCheckboxProps) => {
  if (label) {
    return (
      <ZuluFormControlLabel
        label={label}
        control={
          <Checkbox
            {...rest}
            onChange={event => onChange(event.target.checked)}
          />
        }
      ></ZuluFormControlLabel>
    );
  }
  return <Checkbox {...rest} />;
};

export { ZuluCheckbox };
