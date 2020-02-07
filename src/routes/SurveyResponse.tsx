import React, { useState, useEffect } from "react";
import { Survey } from "../models/Survey";
import { RouteComponentProps } from "react-router";
import { SurveyPage } from "../components/SurveyPage";

interface ISurveyResponse {
  survey: Survey;
}

const SurveyResponse = (props: ISurveyResponse) => {
  const _surveyId = (((props as any) as RouteComponentProps).match
    .params as any).surveyId;

  const [surveyId, _] = useState<string>(_surveyId);

  const [survey, setSurvey] = useState<Survey | null>(null);

  useEffect(() => {
    setSurvey(Survey.fromRandom());
  }, [surveyId]);

  return (
    <div>
      <span>{surveyId}</span>
      {survey?.surveyPages.map(page => (
        <SurveyPage surveyPage={page} />
      ))}
    </div>
  );
};

export { SurveyResponse };
