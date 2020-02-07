import { ResponseStrategyArgs, ResponseStrategy } from ".";

export type SingleChoiceOption = {
  value: number | string;
};

export class SingleChoiceStrategy extends ResponseStrategy<SingleChoiceOption> {
  responseStrategyName = "singleChoice";
  public responseOptions: SingleChoiceOption[] = [];
  protected response = null;
  constructor(
    responseOptions: SingleChoiceOption[],
    args: ResponseStrategyArgs
  ) {
    super(args);
    this.responseOptions = responseOptions;
  }
}
