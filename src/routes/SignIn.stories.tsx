import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { SignIn } from "./SignIn";
import { ZuluAuthTemplate } from "../zulu-ui/templates/Auth";
export default {
  title: "Zentake Design Language|Pages/Sign In Page",
  decorators: [withKnobs]
};

export const main = () => {
  return (
    <ZuluAuthTemplate>
      <SignIn />
    </ZuluAuthTemplate>
  );
};
