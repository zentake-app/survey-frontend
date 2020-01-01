import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { SignIn } from "./SignIn";
import { withRouter } from "react-router";
export default {
  title: "Zentake Design Language|Pages/Sign In Page",
  decorators: [withKnobs]
};


export const main = () => {
  return <SignIn />;
};
