import { SurveySection } from "./SurveySection";
import { SurveyGrouping, ISurveyGrouping } from "./SurveyGrouping";

interface ISurveyPage extends ISurveyGrouping {
  surveySections: SurveySection[];
}

export class SurveyPage extends SurveyGrouping {
  public surveySections: SurveySection[];
  constructor(props: ISurveyPage) {
    super(props);
    this.surveySections = props.surveySections;
  }

  public static fromRandom(numberOfSurveySections = 2) {
    return new SurveyPage({
      surveySections: new Array(numberOfSurveySections)
        .fill(null)
        .map<SurveySection>(_ => SurveySection.fromRandom())
    });
  }
}
