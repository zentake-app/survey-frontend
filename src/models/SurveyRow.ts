import { ISurveyGrouping, SurveyGrouping } from "./SurveyGrouping";
import { Question } from "./Question";

import faker from "faker";

export interface ISurveyRow extends ISurveyGrouping {
  questions: Question<any>[];
}

export class SurveyRow extends SurveyGrouping {
  public questions: Question<any>[];
  constructor(props: ISurveyRow) {
    super(props);
    this.questions = props.questions;
  }

  public static fromRandom(numberOfElements = 2) {
    return new SurveyRow({
      title: "Survey Row",
      text: `Survey Row Text ${faker.lorem.lines(5)}`,
      questions: new Array(numberOfElements)
        .fill(null)
        .map<Question<any>>(_ => Question.fromRandom())
    });
  }
}
