import {
  ResponseStrategy,
  ValidationStrategy,
  FiniteResponseStrategy
} from "./QuestionValidator";

import {
  QuestionType,
  QuestionSubtype
} from "./QuestionType";

export type QuestionArgs = {
  questionText: string;
  questionSubtype: QuestionSubtype;
  validators?: Array<ValidationStrategy>;
};

export abstract class Question {
  public abstract responseStrategy: ResponseStrategy | undefined;
  public abstract questionText: string = "";
  public abstract getResponse(): any;
  public abstract questionType: QuestionType;
  public abstract questionSubtype: QuestionSubtype;
  public static fromRandom = () =>
    QuestionBuilder("multipleChoice", "horizontalList");
}

function QuestionBuilder(
  questionType: QuestionType,
  questionSubtype: QuestionSubtype
): Question {
  switch (questionType) {
    case (questionType = "multipleChoice"):
      return new MultipleChoiceQuestion({
        questionText: "Hey there, delilah",
        questionSubtype: questionSubtype
      });
    default:
      return new MultipleChoiceQuestion({
        questionText: "Hey there, steve",
        questionSubtype: "verticalList"
      });
  }
}

export class MultipleChoiceQuestion extends Question {
  public questionText: string;
  public questionType: QuestionType = "multipleChoice";
  public questionSubtype: QuestionSubtype;
  private validationStrategies: Array<ValidationStrategy>;
  public responseStrategy = new FiniteResponseStrategy({
    validationStrategies: this.validationStrategies
  });
  constructor(args: QuestionArgs) {
    super();
    this.questionText = args.questionText;
    this.validationStrategies = args.validators || [];
    this.questionSubtype = args.questionSubtype;
  }
  public getResponse() {
    return this.responseStrategy.response;
  }
}
