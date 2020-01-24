import faker from "faker";
import { Team } from "./Team";
import moment from "moment";
import { Question } from "./Question";
import { QuestionGroup } from "./QuestionGroup";

interface ISurvey {
  id: string;
  team: Team;
  name: string;
  questionGroups: QuestionGroup[];
  createdAt: Date;
  updatedAt: Date;
}

export class Survey implements ISurvey {
  id: string;
  team: Team;
  name: string;
  questionGroups: QuestionGroup[];
  createdAt: Date;
  updatedAt: Date;
  constructor({
    id,
    team,
    name,
    createdAt,
    updatedAt,
    questionGroups
  }: ISurvey) {
    this.id = id;
    this.questionGroups = questionGroups;
    this.team = team;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static fromRandom(questionGroups = 5) {
    return new Survey({
      id: faker.random.uuid(),
      questionGroups: Array.apply(
        new Array(questionGroups).map<QuestionGroup>(q =>
          QuestionGroup.fromRandom()
        )
      ) as QuestionGroup[],
      team: Team.fromRandom(),
      name: faker.company.bs(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    });
  }

  public static fromNetwork(map: { [key: string]: any }) {
    return new Survey({
      id: map["id"],
      team: map["team"],
      name: map["name"],
      questionGroups: map["questionGroups"],
      createdAt: moment(map["createdAt"]).toDate(),
      updatedAt: moment(map["updatedAt"]).toDate()
    });
  }
}
