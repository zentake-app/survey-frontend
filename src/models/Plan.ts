import { Team } from "./Team";
import faker from "faker";

export interface IPlan {
  id: string;
  name: string;
  price: number;
  teams: Team[];
  createdAt: Date;
  updatedAt: Date;
}

export class Plan implements IPlan {
  id: string;
  name: string;
  price: number;
  teams: Team[];
  createdAt: Date;
  updatedAt: Date;
  constructor(props: IPlan) {
    this.id = props.id;
    this.name = props.name;
    this.price = props.price;
    this.teams = props.teams;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
  public static fromRandom() {
    return new Plan({
      id: faker.random.uuid(),
      name: faker.company.bs(),
      price: faker.random.number(500),
      teams: [],
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    });
  }
}
