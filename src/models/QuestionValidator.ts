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

export abstract class ResponseStrategy {
  public validationStrategies: Array<ValidationStrategy> | undefined;

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
  public abstract response: any | null;
  constructor(args: ResponseStrategyArgs) {
    this.validationStrategies = args.validationStrategies || [];
  }
}

export class FiniteResponseStrategy extends ResponseStrategy {
  public response: number | string | null = null;
}

export class RangeResponseStrategy extends ResponseStrategy {
  public response: number | null = null;
}

export class OpenTextResponseStrategy extends ResponseStrategy {
  public response: string | null = null;
}
