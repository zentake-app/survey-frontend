export class ValidationError extends Error {}

export abstract class ValidationStrategy {
  public abstract validate(response: any): Array<ValidationError> | null;
}

export class NotNullStrategy extends ValidationStrategy {
  public validate(response: any) {
    return response ? null : [new ValidationError("Answer must not be empty")];
  }
}
