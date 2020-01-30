import faker from "faker";

import { ResponseStrategy, MultipleChoiceStrategy } from "./QuestionValidator";

import { QuestionType, QuestionSubtype } from "./QuestionType";

export type QuestionArgs<T> = {
  responseStrategy: ResponseStrategy<T>;
  questionText: string;
};

export class Question<T> {
  public responseStrategy: ResponseStrategy<T>;
  public questionText: string = "";
  public get response(): T | null {
    return this.responseStrategy?.response || null;
  }
  public static fromRandom = (
    type: QuestionType = "multipleChoice",
    subType: QuestionSubtype = "horizontalList"
  ) =>
    new Question({
      questionText: faker.lorem.sentence().replace(".", "?"),
      responseStrategy: new MultipleChoiceStrategy(
        new Array(4).fill(null).map(_ => ({ value: faker.lorem.words(3) })),
        {}
      )
    });
  constructor(args: QuestionArgs<T>) {
    this.questionText = args.questionText;
    this.responseStrategy = args.responseStrategy;
  }
}
