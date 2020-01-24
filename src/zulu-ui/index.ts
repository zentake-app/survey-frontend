import { Question } from "../models/Question";
import { Component } from "react";

interface QuestionBuilderProps {
  question: Question;
}

export class ZuluQuestion extends Component {
  public question: Question;
  constructor(question: Question, props: any) {
    super(props);
    this.question = question;
  }
}

class QuestionBuilder {
  public question: Question;
  constructor(props: QuestionBuilderProps) {
    this.question = props.question;
  }
}
