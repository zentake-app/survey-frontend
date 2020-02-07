import React from "react";
import { SurveyRow as SurveyRowModel } from "../models/SurveyRow";
import { ZuluQuestion } from "../zulu-ui/questions/ZuluQuestion";

export interface ISurveyPageProps {
  surveyRow: SurveyRowModel;
}

export function SurveyRow(props: ISurveyPageProps) {
  return (
    <div
      style={{
        border: "1px solid red",
        margin: "0.5rem",
        padding: "0.5rem"
      }}
    >
      <h3>Survey Row</h3>
      {props.surveyRow.questions.map(question => (
        <ZuluQuestion question={question} />
      ))}
    </div>
  );
}
