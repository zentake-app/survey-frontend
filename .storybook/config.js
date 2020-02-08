import { configure, addDecorator } from "@storybook/react";
import themeDecorator from "./themeDecorator";
import apolloDecorator from "./apolloDecorator";
import memoryRouterDecorator from "./memoryRouterDecorator";

addDecorator(themeDecorator);
addDecorator(memoryRouterDecorator);
addDecorator(apolloDecorator);
configure(require.context("../src", true, /\.stories.tsx$/), module);
