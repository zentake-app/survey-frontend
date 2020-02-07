import * as React from "react";
import TextField from "@material-ui/core/TextField";

export type ZuluLabelVariant = "filled" | "outlined" | "standard";
export interface ZuluTextFieldProps {
  placeholder?: string;
  label?: string;
  value?: string;
  variant?: ZuluLabelVariant;
  helperText?: string;
  className?: string;
  fullWidth?: boolean;
  name?: string;
  type?: string;
  onChange: (newText: string) => void;
}

export function ZuluTextField({
  placeholder = "",
  label = "",
  value = "",
  helperText = "",
  variant = "standard",
  onChange = () => {},
  ...props
}: ZuluTextFieldProps) {
  return (
    <TextField
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      label={label}
      value={value}
      variant={variant as any}
      helperText={helperText}
      {...props}
    ></TextField>
  );
}
