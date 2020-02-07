import React from "react";
import { SurveySection as SurveySectionModel } from "../models/SurveySection";
import { SurveyRow } from "./SurveyRow";

export interface ISurveySectionProps {
  surveySection: SurveySectionModel;
}

export function SurveySection(props: ISurveySectionProps) {
  return (
    <div
      style={{
        border: "1px solid blue",
        margin: "1rem"
      }}
    >
      <h2>Survey Section</h2>
      {props.surveySection.rows.map(row => (
        <SurveyRow surveyRow={row} />
      ))}
    </div>
  );
}
