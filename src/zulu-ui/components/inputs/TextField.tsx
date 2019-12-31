import * as React from 'react';
import {TextField} from '@material-ui/core';

export type ZuluLabelVariant =  'filled' | 'outlined' | 'standard';
export interface ZuluTextFieldProps {
  placeholder?: string;
  label?: string;
  value?: string;
  variant?: ZuluLabelVariant;
  helperText?: string;
}

export function ZuluTextField({
  placeholder = '',
  label = '',
  value = '',
  helperText = '',
  variant = 'standard',
  ...props
}: ZuluTextFieldProps) {
  return (
    <TextField
      placeholder={placeholder}
      label={label}
      value={value}
      variant={variant as any}
      helperText={helperText}
      {...props}></TextField>
  );
}