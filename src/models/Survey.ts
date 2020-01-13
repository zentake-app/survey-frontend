import faker from "faker";
import { Team } from "./Team";
import moment from "moment";

interface ISurvey {
  id: string;
  team: Team;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Survey implements ISurvey {
  id: string;
  team: Team;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  constructor({ id, team, name, createdAt, updatedAt }: ISurvey) {
    this.id = id;
    this.team = team;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static fromRandom() {
    return new Survey({
      id: faker.random.uuid(),
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
      createdAt: moment(map["createdAt"]).toDate(),
      updatedAt: moment(map["updatedAt"]).toDate()
    });
  }
}
