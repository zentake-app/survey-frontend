import React, { useState } from "react";
import { Question } from "../../models/Question";
import { QuestionText } from "./QuestionText";
import { QuestionResponseField } from "./QuestionResponseField";

export interface IZuluQuestionProps {
  question: Question<any>;
}

export function ZuluQuestion(props: IZuluQuestionProps) {
  return (
    <div>
      <QuestionText questionText={props.question.questionText} />
      <QuestionResponseField
        responseStrategy={props.question.responseStrategy}
      ></QuestionResponseField>
    </div>
  );
}
