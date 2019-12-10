import * as React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {ZuluSelect} from './Select';

export default {title: 'Zentake Design Language|Atoms/inputs/Select', decorators: [withKnobs]};

export const select = () => (
  <ZuluSelect>
    <ZuluSelect.Item value="a" >Select 1</ZuluSelect.Item>
    <ZuluSelect.Item value="b" >Select 2</ZuluSelect.Item>
    <ZuluSelect.Item value="c" >Select 3</ZuluSelect.Item>
  </ZuluSelect>
);
