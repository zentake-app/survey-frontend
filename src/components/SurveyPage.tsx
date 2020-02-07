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
        border: "1px solid grey",
        padding: "1rem"
      }}
    >
      <h1>{props.surveyPage.title}</h1>
      <p>{props.surveyPage.text}</p>
      {props.surveyPage.surveySections.map(section => (
        <SurveySection surveySection={section} />
      ))}
    </div>
  );
}
