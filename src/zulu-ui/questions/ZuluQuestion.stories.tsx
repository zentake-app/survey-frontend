import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Question } from "../../models/Question";
import { ZuluQuestion } from "./ZuluQuestion";
export default {
  title: "Zentake Design Language|Questions",
  decorators: [withKnobs]
};

export const question = () => {
  return <ZuluQuestion question={Question.fromRandom()} />;
};
