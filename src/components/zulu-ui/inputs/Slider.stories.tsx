import * as React from 'react';
import {ZuluSlider, ShowLabelOptions} from './Slider';

import {withKnobs, number, select, boolean} from '@storybook/addon-knobs';

export default {
  title: 'Zentake Design Language|Atoms/Slider',
  decorators: [withKnobs],
};

const VISIBILITY_OPTIONS: {[key: string]: ShowLabelOptions} = {
  'Show Always': 'always',
  Hidden: 'hidden',
  'On Hover': 'hover',
};

export const slider = () => {
  return (
    <div style={{marginTop: 80}}>
      <ZuluSlider
        labelVisibility={select(
          'Label Visibility',
          VISIBILITY_OPTIONS,
          VISIBILITY_OPTIONS['Show Always'],
        )}
        min={number('Min', 0)}
        max={number('Max', 10)}
        defaultValue={number('Default Value', 5)}
        step={number('Step', 1.0)}
        getLabel={value => `${value}`}
        marks={boolean("Show Marks", true)}
      />
    </div>
  );
};
