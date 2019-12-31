import * as React from 'react';
import {withKnobs, select} from '@storybook/addon-knobs';
import {ZuluThemeProvider, theme} from './ThemeProvider';
import {ZuluButton} from '../components/inputs/Button';
import {Theme} from '@material-ui/core';
import * as Colors from '@material-ui/core/colors';
export default {
  title: 'Zentake Design Language|Theme/Theme Provider',
  decorators: [withKnobs],
};

const COLOR_OPTIONS = Object.keys(Colors).reduce((previous, color) => {
  previous[color] = Colors[color];
  return previous;
}, {});

export const themeProvider = () => {
  const newTheme: Theme = {
    ...theme,
    palette: {
      ...theme.palette,
      primary: select('Primary Color', COLOR_OPTIONS, COLOR_OPTIONS['amber']),
    },
  };
  return (
    <ZuluThemeProvider __theme={theme}>
      <ZuluButton text="Primary Button" variant="contained" color="primary"></ZuluButton>
      <ZuluButton text="Secondary Button" variant="contained" color="secondary"></ZuluButton>
    </ZuluThemeProvider>
  );
};
