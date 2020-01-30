import React from "react";
import {
  ResponseStrategy,
  MultipleChoiceStrategy
} from "../../models/QuestionValidator";
import MultipleChoiceResponse from "./MultipleChoice";

interface IQuestionResponseFieldProps {
  responseStrategy: ResponseStrategy<any>;
}

export function QuestionResponseField({
  responseStrategy
}: IQuestionResponseFieldProps) {
  switch (responseStrategy.responseStrategyName) {
    case "multiple_choice":
      return (
        <MultipleChoiceResponse
          responseStrategy={responseStrategy as MultipleChoiceStrategy}
        />
      );
    default:
      return null;
  }
}
