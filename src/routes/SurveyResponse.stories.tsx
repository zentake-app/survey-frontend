import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { UnauthenticatedTemplate } from "../zulu-ui/templates/Unauthenticated";
import { SurveyResponse } from "./SurveyResponse";
export default {
  title: "Zentake Design Language|Pages/Survey Response Page",
  decorators: [withKnobs]
};

export const main = () => {
  return (
    <UnauthenticatedTemplate>
      <SurveyResponse />
    </UnauthenticatedTemplate>
  );
};
