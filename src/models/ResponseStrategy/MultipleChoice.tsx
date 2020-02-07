import { ResponseStrategyArgs, ResponseStrategy } from ".";

export type MultipleChoiceOption = {
  value: number | string;
};

export class MultipleChoiceStrategy extends ResponseStrategy<
  MultipleChoiceOption[]
> {
  responseStrategyName = "multipleChoice";
  public responseOptions: MultipleChoiceOption[] = [];
  protected response = null;
  constructor(
    responseOptions: MultipleChoiceOption[],
    args: ResponseStrategyArgs
  ) {
    super(args);
    this.responseOptions = responseOptions;
  }
}
