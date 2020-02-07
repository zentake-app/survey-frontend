import { ISurveyGrouping, SurveyGrouping } from "./SurveyGrouping";
import { Question } from "./Question";

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
      questions: new Array(numberOfElements)
        .fill(null)
        .map<Question<any>>(_ => Question.fromRandom())
    });
  }
}
