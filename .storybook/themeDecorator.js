import React from "react";
import { ZuluThemeProvider } from "../src/zulu-ui/theme/ThemeProvider";

const ThemeDecorator = storyFn => (
  <ZuluThemeProvider>{storyFn()}</ZuluThemeProvider>
);

export default ThemeDecorator;
