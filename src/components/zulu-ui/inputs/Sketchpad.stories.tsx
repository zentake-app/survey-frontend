import * as React from 'react';
import {withKnobs, color, number, text} from '@storybook/addon-knobs';
import {Sketchpad} from './Sketchpad';

export default {
  title: 'Zentake Design Language|Atoms/inputs/Sketchpad',
  decorators: [withKnobs],
};
const DEFAULT_IMAGE_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Human_skeleton_front_no-text_no-color.svg/1200px-Human_skeleton_front_no-text_no-color.svg.png';
export const sketchPad = () => {
  const ref = React.createRef<Sketchpad>();
  const triggerDownload = (imgUri: string) => {
    const evt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true,
    });
    const a = document.createElement('a');
    a.setAttribute('download', 'SketchImage.png');
    a.setAttribute('href', imgUri);
    a.setAttribute('target', '_blank');
    a.dispatchEvent(evt);
  };
  return (
    <div>
      <div>
        <button
          onClick={() =>
            ref.current &&
            ref.current
              .getImageFromSVG()
              .then(d => triggerDownload(d as string))
          }>
          Download Image
        </button>
      </div>
      <div style={{height: '600px'}}>
        <Sketchpad
          ref={ref}
          strokeColor={color('Stroke Color', '#000000')}
          strokeWidth={number('Stroke Width', 3, {min: 0, max: 10, step: 1.0})}
          backgroundImage={DEFAULT_IMAGE_URL}
        />
      </div>
    </div>
  );
};
