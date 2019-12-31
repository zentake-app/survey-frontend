import * as React from 'react';
import {ZuluColorNames} from './Colors';
import Checkbox from '@material-ui/core/Checkbox';
import {ZuluFormControlLabel} from './Form';
export interface ZuluCheckboxProps {
  disabled?: boolean;
  checked: boolean;
  required?: boolean;
  color?: ZuluColorNames;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const ZuluCheckbox = ({label, ...rest}: ZuluCheckboxProps) => {
  if (label) {
    return (
      <ZuluFormControlLabel
        label={label}
        control={<Checkbox {...rest} />}></ZuluFormControlLabel>
    );
  }
  return <Checkbox {...rest} />;
};

export {ZuluCheckbox};
