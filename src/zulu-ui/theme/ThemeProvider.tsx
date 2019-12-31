import * as React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import * as Colors from "@material-ui/core/colors";
import theme from "./";

interface ZuluThemeProviderProps {
  children: React.ReactNode;
  __theme?: Theme;
}

const ZuluThemeProvider = ({
  __theme = theme,
  ...props
}: ZuluThemeProviderProps) => {
  return <ThemeProvider theme={__theme}>{props.children}</ThemeProvider>;
};

export { ZuluThemeProvider };
