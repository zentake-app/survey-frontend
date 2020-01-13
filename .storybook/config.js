import { configure, addDecorator } from "@storybook/react";
import themeDecorator from "./themeDecorator";
import apolloDecorator from "./apolloDecorator";

addDecorator(themeDecorator);
addDecorator(apolloDecorator);
configure(require.context("../src", true, /\.stories.tsx$/), module);
