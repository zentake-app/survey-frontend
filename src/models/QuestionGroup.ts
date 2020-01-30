import faker from "faker";
import { Question } from "./Question";
export class QuestionGroup {
  constructor(
    public createdAt: Date,
    public updatedAt: Date,
    public children: Question<any>[] | QuestionGroup[]
  ) {}

  public static fromRandom() {
    return new QuestionGroup(
      faker.date.past(),
      faker.date.past(),
      Array.apply(new Array(10).map(_ => Question.fromRandom())) as Question<
        any
      >[]
    );
  }
}
