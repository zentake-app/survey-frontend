import React from "react";
import { MultipleChoiceStrategy } from "../../models/ResponseStrategy/MultipleChoice";

import MultipleChoiceResponse from "./MultipleChoice";
import { ResponseStrategy } from "../../models/ResponseStrategy";
import { SingleChoiceStrategy } from "../../models/ResponseStrategy/SingleChoice";
import SingleChoiceResponse from "./SingleChoiceZulu";
import ShortText from "./ShortText";
import { TextStrategy } from "../../models/ResponseStrategy/Text";

interface IQuestionResponseFieldProps {
  responseStrategy: ResponseStrategy<any>;
}

export function QuestionResponseField({
  responseStrategy
}: IQuestionResponseFieldProps) {
  switch (responseStrategy.responseStrategyName) {
    case "multipleChoice":
      return (
        <MultipleChoiceResponse
          responseStrategy={responseStrategy as MultipleChoiceStrategy}
        />
      );
    case "singleChoice":
      return (
        <SingleChoiceResponse
          responseStrategy={responseStrategy as SingleChoiceStrategy}
        />
      );
    case "text":
      return <ShortText responseStrategy={responseStrategy as TextStrategy} />;
    default:
      return null;
  }
}
