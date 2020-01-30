import { ValidationStrategy, ValidationError } from "../QuestionValidator";

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



export class RangeResponseStrategy extends ResponseStrategy<number> {
  public response = null;
  responseStrategyName = "range";
}

export class OpenTextResponseStrategy extends ResponseStrategy<number> {
  responseStrategyName = "open_text";
  public response = null;
}