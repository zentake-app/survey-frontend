import * as React from 'react';
import {withKnobs, color, number, text} from '@storybook/addon-knobs';
import {Sketchpad} from './Sketchpad';

export default {
  title: 'Zentake Design Language|Atoms/Sketchpad',
  decorators: [withKnobs],
};
const DEFAULT_IMAGE_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Human_skeleton_front_no-text_no-color.svg/1200px-Human_skeleton_front_no-text_no-color.svg.png';
export const sketchPad = () => (
  <div
    style={{
      position: 'relative',
      maxWidth: 'fit-content',
      height: text('Image Height', '600px'),
    }}>
    <Sketchpad
      style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
      strokeColor={color('Stroke Color', '#000000')}
      strokeWidth={number('Stroke Width', 3, {min: 0, max: 10, step: 1.0})}
    />
    <img
      style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}}
      src={text('Image', DEFAULT_IMAGE_URL)}
    />
  </div>
);
