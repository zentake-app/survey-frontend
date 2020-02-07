import { SurveyGrouping, ISurveyGrouping } from "./SurveyGrouping";
import { SurveyRow } from "./SurveyRow";
import faker from "faker";

export interface ISurveySection extends ISurveyGrouping {
  rows: SurveyRow[];
}

export class SurveySection extends SurveyGrouping {
  public rows: SurveyRow[];
  constructor(props: ISurveySection) {
    super(props);
    this.rows = props.rows;
  }

  public static fromRandom(numberOfElements = 2) {
    return new SurveySection({
      title: "Survey Section",
      text: `Survey Section Text ${faker.lorem.lines(5)}`,
      rows: new Array(numberOfElements)
        .fill(null)
        .map<SurveyRow>(_ => SurveyRow.fromRandom())
    });
  }
}
