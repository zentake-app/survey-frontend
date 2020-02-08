import faker from "faker";
import { Team } from "./Team";
import moment from "moment";
import { SurveyPage } from "./SurveyPage";

interface ISurvey {
  id: string;
  team: Team;
  name: string;
  surveyPages: SurveyPage[];
  createdAt: Date;
  updatedAt: Date;
}

export class Survey implements ISurvey {
  id: string;
  team: Team;
  name: string;
  surveyPages: SurveyPage[];
  createdAt: Date;
  updatedAt: Date;
  constructor({ id, team, name, createdAt, updatedAt, surveyPages }: ISurvey) {
    this.id = id;
    this.surveyPages = surveyPages;
    this.team = team;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static fromRandom(surveyPageAmount = 5) {
    return new Survey({
      id: faker.random.uuid(),
      surveyPages: new Array(surveyPageAmount)
        .fill(null)
        .map(_ => SurveyPage.fromRandom()),
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
      surveyPages: map["surveyPages"],
      createdAt: moment(map["createdAt"]).toDate(),
      updatedAt: moment(map["updatedAt"]).toDate()
    });
  }
}
