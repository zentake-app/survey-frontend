import faker from "faker";

import { QuestionType } from "../QuestionType";
import { ResponseStrategy } from ".";
import { MultipleChoiceStrategy } from "./MultipleChoice";
import { SingleChoiceStrategy } from "./SingleChoice";
import { TextStrategy } from "./Text";

export function responseStrategyBuilder(
  type: QuestionType
): ResponseStrategy<any> {
  switch (type) {
    case "multipleChoice":
      return new MultipleChoiceStrategy(
        new Array(4).fill(null).map(_ => ({ value: faker.lorem.words(3) })),
        {}
      );
    case "singleChoice":
      return new SingleChoiceStrategy(
        new Array(4).fill(null).map(_ => ({ value: faker.lorem.words(3) })),
        {}
      );
    case "text":
      return new TextStrategy({});
    default:
      return new SingleChoiceStrategy(
        new Array(4).fill(null).map(_ => ({ value: faker.lorem.words(3) })),
        {}
      );
  }
}
