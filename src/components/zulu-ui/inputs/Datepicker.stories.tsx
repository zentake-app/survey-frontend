import * as React from 'react';
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs';
import {ZuluDatePicker, ZuluDatepickerProps} from './Datepicker';
import moment from 'moment';
export default {title: 'Datepicker', decorators: [withKnobs]};

export const datePicker = () => {
  return (
    <ZuluDatePicker
      value={moment()}
      onChange={console.log}
      format="MM/DD/YYYY"
    />
  );
};

export const timePicker = () => {
  return (
    <ZuluDatePicker.Time
      value={moment()}
      onChange={console.log}
      format={'h:mm:ss A'}
    />
  );
};

export const dateTimePicker = () => {
  return (
    <ZuluDatePicker.DateTime
      value={moment()}
      format={'MM/DD/YYYY h:mm:ss A'}
      onChange={console.log}
    />
  );
};
