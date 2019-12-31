import * as React from 'react';
import FormControlLabel, {
  FormControlLabelProps,
} from '@material-ui/core/FormControlLabel';
import FormGroup, {FormGroupProps} from '@material-ui/core/FormGroup';

export interface ZuluFormControlLabelProps extends FormControlLabelProps {}
export const ZuluFormControlLabel = (props: ZuluFormControlLabelProps) => (
  <FormControlLabel {...props} />
);

export interface ZuluFormGroupProps extends FormGroupProps {}
export const ZuluFormGroup = (props: ZuluFormGroupProps) => (
  <FormGroup {...props} />
);
