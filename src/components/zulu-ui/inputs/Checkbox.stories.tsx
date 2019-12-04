import * as React from 'react';
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs';
import {ZuluCheckbox} from './Checkbox';
import {ZuluColorNames} from './Colors';
export default {title: 'Zentake Design Language|Atoms/Checkbox', decorators: [withKnobs]};

const COLOR_OPTIONS: {[key: string]: ZuluColorNames} = {
  Primary: 'primary',
  Secondary: 'secondary',
  Default: 'default',
};
export const checkbox = () => {
  return (
    <ZuluCheckbox
      disabled={boolean('Disabled', false)}
      color={select('Button Color', COLOR_OPTIONS, COLOR_OPTIONS.Default)}
      checked={boolean('Is Checked', true)}
      onChange={e => console.log(e.target && !!e.target.checked)}
    />
  );
};

export const withLabel = () => {
  return (
    <ZuluCheckbox
      disabled={boolean('Disabled', false)}
      checked={boolean('Is Checked', true)}
      onChange={({target: {checked}}) => console.log(checked)}
      label={text('Checkbox Label', 'Checkbox Label')}
    />
  );
};
