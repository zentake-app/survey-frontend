import * as React from 'react';
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs';
import {
  ZuluButton,
  ZuluButtonProps,
  ZuluButtonVariant,
  ZuluButtonColor,
  ZuluButtonSize
} from './Button';

export default {title: 'Button', decorators: [withKnobs]};

const VARIANT_OPTIONS: {[key: string]: ZuluButtonVariant} = {
  Outlined: 'outlined',
  Contained: 'contained',
  Text: 'text',
};

const COLOR_OPTIONS: {[key: string]: ZuluButtonColor} = {
  Primary: 'primary',
  Secondary: 'secondary',
  Default: 'default',
  Inherit: 'inherit'
}
export const button = () => (
  <ZuluButton
    variant={select(
      'Button Variant',
      VARIANT_OPTIONS,
      VARIANT_OPTIONS.Outlined,
    )}
    disabled={boolean('Disabled', false)}
    color={select('Button Color', COLOR_OPTIONS, COLOR_OPTIONS.Default)}
    text={text('Button Text', 'Button')}
  />
);

export const buttonGroup = () => (
  <ZuluButton.Group
    variant={select(
      'Button Variant',
      VARIANT_OPTIONS,
      VARIANT_OPTIONS.Outlined,
    )}
    disabled={boolean('Disabled', false)}
    color={select('Button Color', COLOR_OPTIONS, COLOR_OPTIONS.Default)}
  >
    <ZuluButton text="Button One"/>
    <ZuluButton text="Button Two"/>
    <ZuluButton text="Button Three"/>
  </ZuluButton.Group>
)
