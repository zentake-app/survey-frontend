import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import MultipleChoiceZulu from "./MultipleChoiceZulu";
export default {
  title: "Zentake Design Language|Questions/Multiple Choice",
  decorators: [withKnobs]
};

export const multipleChoiceZulu = () => {
  return <MultipleChoiceZulu />;
};
