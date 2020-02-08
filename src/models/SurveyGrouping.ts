export interface ISurveyGrouping {
  title?: string;
  text?: string;
}

export abstract class SurveyGrouping {
  public title?: string;
  public text?: string;

  constructor({ title, text }: ISurveyGrouping) {
    this.title = title;
    this.text = text;
  }
}
