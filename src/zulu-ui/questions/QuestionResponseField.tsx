import React from "react";
import { MultipleChoiceStrategy } from "../../models/ResponseStrategy/MultipleChoice";

import MultipleChoiceResponse from "./MultipleChoice";
import { ResponseStrategy } from "../../models/ResponseStrategy";

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
