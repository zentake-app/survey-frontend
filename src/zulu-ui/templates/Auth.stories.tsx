import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { ZuluAuthTemplate } from "./Auth";
export default {
  title: "Zentake Design Language|Templates/Auth Template",
  decorators: [withKnobs]
};

export const main = () => {
  return (
    <ZuluAuthTemplate>
      <div></div>
    </ZuluAuthTemplate>
  );
};
