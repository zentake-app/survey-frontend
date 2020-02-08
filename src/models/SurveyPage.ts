import { SurveySection } from "./SurveySection";
import { SurveyGrouping, ISurveyGrouping } from "./SurveyGrouping";
import faker from "faker";

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
      title: "Survey Page",
      text: `Survey Page Text ${faker.lorem.lines(5)}`,
      surveySections: new Array(numberOfSurveySections)
        .fill(null)
        .map<SurveySection>(_ => SurveySection.fromRandom())
    });
  }
}
