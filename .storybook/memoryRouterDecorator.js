import React from "react";
import { MemoryRouter } from "react-router";

const ThemeDecorator = storyFn => (
  <MemoryRouter>{storyFn()}</MemoryRouter>
);

export default ThemeDecorator;
