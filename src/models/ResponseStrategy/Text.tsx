import { ResponseStrategy } from ".";

export type TextOption = {
  value: string;
};

export class TextStrategy extends ResponseStrategy<TextOption> {
  responseStrategyName = "text";
  protected response = null;
}
