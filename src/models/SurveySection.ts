import { SurveyGrouping, ISurveyGrouping } from "./SurveyGrouping";
import { SurveyRow } from "./SurveyRow";

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
      rows: new Array(numberOfElements)
        .fill(null)
        .map<SurveyRow>(_ => SurveyRow.fromRandom())
    });
  }
}
