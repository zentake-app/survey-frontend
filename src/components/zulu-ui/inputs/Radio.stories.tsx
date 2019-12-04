import * as React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {ZuluRadio} from './Radio';

export default {title: 'Zentake Design Language|Atoms/Radio', decorators: [withKnobs]};

export const radioGroup = () => (
  <ZuluRadio.Group value="a">
    <ZuluRadio label={'Radio 1'} value="a" />
    <ZuluRadio label={'Radio 2'} value="b" />
    <ZuluRadio label={'Radio 3'} value="c" />
  </ZuluRadio.Group>
);
