import * as React from 'react';
import { withKnobs, color, number } from '@storybook/addon-knobs';
import { Sketchpad } from './Sketchpad';

export default { title: 'Zentake Design Language|Atoms/Sketchpad', decorators: [withKnobs] };

export const sketchPad = () => (
  <div
    style={{ position: 'relative' }}>
    <Sketchpad style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} imageUrl="https://via.placeholder.com/1000"
      strokeColor={color("Stroke Color", "#000000")}
      strokeWidth={number("Stroke Width", 3, { min: 0, max: 10, step: 1.0 })}
    />
    <img src="https://via.placeholder.com/400" />
  </div>
);
