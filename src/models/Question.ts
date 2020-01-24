import {
  ResponseStrategy,
  ValidationStrategy,
  FiniteResponseStrategy
} from "./QuestionValidator";

export type QuestionArgs = {
  questionText: string;
  validators?: Array<ValidationStrategy>;
};



export abstract class Question {
  public abstract responseStrategy: ResponseStrategy | undefined;
  public abstract questionText: string = "";
  constructor(public name: string, { questionText }: QuestionArgs) {}
  public abstract getResponse(): any;
}

export class MultipleChoiceQuestion extends Question {
  public questionText: string;
  private validationStrategies: Array<ValidationStrategy>;
  public responseStrategy = new FiniteResponseStrategy({
    validationStrategies: this.validationStrategies
  });
  constructor(public name: string, args: QuestionArgs) {
    super(name, args);
    this.questionText = args.questionText;
    this.validationStrategies = args.validators || [];
  }
  public getResponse() {
    return this.responseStrategy.response;
  }
}
