import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Dashboard } from "./Dashboard";
export default {
  title: "Zentake Design Language|Pages/Dashboard Page",
  decorators: [withKnobs]
};

export const main = () => {
  return <Dashboard />;
};
