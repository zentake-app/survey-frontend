import { ValidationStrategy, ValidationError } from "../QuestionValidator";

export interface ResponseStrategyArgs {
  validationStrategies?: Array<ValidationStrategy>;
}

export abstract class ResponseStrategy<T> {
  private listeners: ((value: T | null) => void)[] = [];

  public subscribe(callback: (value: T | null) => void) {
    this.listeners.push(callback);
  }

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
  protected abstract response: T | null;

  public setResponse(response: T | null) {
    this.response = response;
    this.listeners.forEach(cb => cb(response));
  }

  public getResponse() {
    return this.response;
  }

  constructor(args: ResponseStrategyArgs) {
    this.validationStrategies = args.validationStrategies || [];
  }
}

// export class RangeResponseStrategy extends ResponseStrategy<number> {
//   public response = null;
//   responseStrategyName = "range";
// }

// export class OpenTextResponseStrategy extends ResponseStrategy<number> {
//   responseStrategyName = "open_text";
//   public response = null;
// }
