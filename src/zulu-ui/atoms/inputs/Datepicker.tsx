import * as React from 'react';
import {
  KeyboardTimePicker,
  KeyboardTimePickerProps,
  KeyboardDatePicker,
  KeyboardDatePickerProps,
  KeyboardDateTimePicker,
  KeyboardDateTimePickerProps,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import Moment from '@date-io/moment';
export interface ZuluDatePickerProps {}

export interface ZuluDatePickerProps extends KeyboardDatePickerProps {}

const ZuluDatePicker = ({onChange, value, ...rest}: ZuluDatePickerProps) => {
  return (
    <MuiPickersUtilsProvider utils={Moment}>
      <KeyboardDatePicker onChange={onChange} value={value} {...rest} />
    </MuiPickersUtilsProvider>
  );
};

export interface ZuluTimePickerProps extends KeyboardTimePickerProps {}

ZuluDatePicker.Time = ({...rest}: ZuluTimePickerProps) => {
  return (
    <MuiPickersUtilsProvider utils={Moment}>
      <KeyboardTimePicker {...rest} />
    </MuiPickersUtilsProvider>
  );
};

export interface ZuluDateTimePickerProps extends KeyboardDateTimePickerProps {}

ZuluDatePicker.DateTime = ({...rest}: ZuluDateTimePickerProps) => {
  return (
    <MuiPickersUtilsProvider utils={Moment}>
      <KeyboardDateTimePicker {...rest} />
    </MuiPickersUtilsProvider>
  );
};
export {ZuluDatePicker};
