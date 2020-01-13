import faker from "faker";

export interface ITeam {
  id: string;
  name: string;
  plan: object;

  createdAt: Date;
  updatedAt: Date;
}

export class Team {
  id: string;
  name: string;
  plan: object;
  createdAt: Date;
  updatedAt: Date;
  constructor(props: ITeam) {
    this.id = props.id;
    this.name = props.name;
    this.plan = props.plan;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
  public static fromRandom() {
    return new Team({
      id: faker.random.uuid(),
      name: faker.lorem.words(3),
      plan: {},
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    });
  }
}
