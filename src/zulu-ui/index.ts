import { Component } from "react";
import { ResponseStrategy } from "../models/QuestionValidator";

interface QuestionBuilderProps {
  responseStrategy: ResponseStrategy<any>;
}
interface ZuluQuestionProps {
  responseStrategy: ResponseStrategy<any>;
}

export interface ZuluResponseField {
  responseStrategy: ResponseStrategy<any>;
}

class ResponseFieldBuilder {
  protected responseStrategy: ResponseStrategy<any>;
  constructor(props: QuestionBuilderProps) {
    this.responseStrategy = props.responseStrategy;
  }
}
