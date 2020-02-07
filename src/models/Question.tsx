import faker from "faker";

import { ResponseStrategy } from "./ResponseStrategy";

import { QuestionType, QuestionSubtype } from "./QuestionType";
import { responseStrategyBuilder } from "./ResponseStrategy/responseBuilder";

export type QuestionArgs<T> = {
  responseStrategy: ResponseStrategy<T>;
  questionText: string;
};

export class Question<T> {
  public responseStrategy: ResponseStrategy<T>;
  public questionText: string = "";
  public get response(): T | null {
    return this.responseStrategy?.getResponse() || null;
  }
  public static fromRandom = (
    type: QuestionType = "multipleChoice",
    subType: QuestionSubtype = "horizontalList"
  ) => {
    let responseStrategy: ResponseStrategy<any> = responseStrategyBuilder(type);
    return new Question({
      questionText: faker.lorem.sentence().replace(".", "?"),
      responseStrategy
    });
  };
  constructor(args: QuestionArgs<T>) {
    this.questionText = args.questionText;
    this.responseStrategy = args.responseStrategy;
  }
}
