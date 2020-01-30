import { ResponseStrategyArgs, ResponseStrategy } from ".";

export type MultipleChoiceOption = {
  value: number | string;
};

export class MultipleChoiceStrategy extends ResponseStrategy<
  MultipleChoiceOption
> {
  responseStrategyName = "multiple_choice";
  public responseOptions: MultipleChoiceOption[] = [];
  public response = null;
  constructor(
    responseOptions: MultipleChoiceOption[],
    args: ResponseStrategyArgs
  ) {
    super(args);
    console.warn("response options", responseOptions);
    this.responseOptions = responseOptions;
  }
}
