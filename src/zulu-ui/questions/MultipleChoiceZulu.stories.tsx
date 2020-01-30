import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import MultipleChoiceResponse from "./MultipleChoice";
import { Question } from "../../models/Question";
import { MultipleChoiceStrategy } from "../../models/QuestionValidator";
export default {
  title: "Zentake Design Language|Questions",
  decorators: [withKnobs]
};

export const multipleChoice = () => {
  return (
    <MultipleChoiceResponse
      responseStrategy={
        Question.fromRandom("multipleChoice")
          .responseStrategy as MultipleChoiceStrategy
      }
    />
  );
};
