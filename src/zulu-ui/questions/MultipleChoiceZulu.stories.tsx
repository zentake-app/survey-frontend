import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import MultipleChoiceResponse from "./MultipleChoice";
import { Question } from "../../models/Question";
import { MultipleChoiceStrategy } from "../../models/ResponseStrategy/MultipleChoice";
export default {
  title: "Zentake Design Language|Question Responses/Multiple Choice",
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
