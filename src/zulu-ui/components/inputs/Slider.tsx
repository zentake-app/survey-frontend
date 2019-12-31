import * as React from 'react';
import Slider from '@material-ui/core/Slider';

export type Mark = {value: number; label: React.ReactNode};

export type ShowLabelOptions = 'hover' | 'always' | 'hidden';

export interface SliderProps {
  max: number;
  min: number;
  step?: number;
  marks?: Mark[] | boolean;
  defaultValue?: number;
  getLabel?: (value: number) => string;
  labelVisibility?: ShowLabelOptions;
}

type MappedLabelOptions = {[K in ShowLabelOptions]: 'auto' | 'on' | 'off'}

const DISPLAY_OPTIONS: MappedLabelOptions = {
  hover: 'auto',
  always: 'on',
  hidden: 'off',
};

const ZuluSlider = ({
  max,
  min,
  step,
  marks,
  defaultValue,
  getLabel,
  labelVisibility,
}: SliderProps) => {
  return (
    <Slider
      step={step}
      marks={marks ? marks : undefined}
      max={max}
      min={min}
      defaultValue={defaultValue}
      getAriaValueText={getLabel}
      valueLabelDisplay={
        labelVisibility ? DISPLAY_OPTIONS[labelVisibility] : undefined
      }
    />
  );
};

export {ZuluSlider};
