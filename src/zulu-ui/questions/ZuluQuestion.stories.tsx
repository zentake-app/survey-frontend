import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Question } from "../../models/Question";
import { ZuluQuestion } from "./ZuluQuestion";
export default {
  title: "Zentake Design Language|Questions",
  decorators: [withKnobs]
};

export const question = () => {
  return (
    <div>
      <ZuluQuestion question={Question.fromRandom("multipleChoice")} />
      <ZuluQuestion question={Question.fromRandom("singleChoice")} />
      <ZuluQuestion question={Question.fromRandom("text")} />
    </div>
  );
};
