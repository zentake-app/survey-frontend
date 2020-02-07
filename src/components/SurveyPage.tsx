import React from "react";
import { SurveyPage as SurveyPageModel } from "../models/SurveyPage";
import { SurveySection } from "./SurveySection";

export interface ISurveyPageProps {
  surveyPage: SurveyPageModel;
}

export function SurveyPage(props: ISurveyPageProps) {
  return (
    <div
      style={{
        margin: "3rem",
        border: "1px solid grey"
      }}
    >
      <h1>Survey Page</h1>
      {props.surveyPage.surveySections.map(section => (
        <SurveySection surveySection={section} />
      ))}
    </div>
  );
}
