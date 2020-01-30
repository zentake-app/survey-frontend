class ValidationError extends Error {}

export abstract class ValidationStrategy {
  public abstract validate(response: any): Array<ValidationError> | null;
}

export class NotNullStrategy extends ValidationStrategy {
  public validate(response: any) {
    return response ? null : [new ValidationError("Answer must not be empty")];
  }
}

export interface ResponseStrategyArgs {
  validationStrategies?: Array<ValidationStrategy>;
}

export abstract class ResponseStrategy<T> {
  public validationStrategies: Array<ValidationStrategy> | undefined;
  public abstract responseStrategyName: string;
  public validate(): Array<ValidationError> | null {
    return (
      this.validationStrategies?.reduce<Array<ValidationError>>(
        (previousValidationErrors, nextValidationStrategy) => {
          const newValidationErrors = nextValidationStrategy.validate(
            this.response
          );
          return [...previousValidationErrors, ...(newValidationErrors || [])];
        },
        []
      ) || null
    );
  }
  public abstract response: T | null;
  constructor(args: ResponseStrategyArgs) {
    this.validationStrategies = args.validationStrategies || [];
  }
}

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

export class RangeResponseStrategy extends ResponseStrategy<number> {
  public response = null;
  responseStrategyName = "range";
}

export class OpenTextResponseStrategy extends ResponseStrategy<number> {
  responseStrategyName = "open_text";
  public response = null;
}
