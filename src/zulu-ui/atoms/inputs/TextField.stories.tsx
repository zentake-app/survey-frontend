import * as React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { ZuluTextField, ZuluLabelVariant } from "./TextField";

export default {
  title: "Zentake Design Language|Atoms/inputs/Text Field",
  decorators: [withKnobs]
};

const VARIANT_OPTIONS: { [key: string]: ZuluLabelVariant } = {
  Standard: "standard",
  Filled: "filled",
  Outlined: "outlined"
};

export const textField = () => (
  <ZuluTextField
    onChange={() => {}}
    placeholder={boolean("Has Placeholder", true) ? "Placeholder" : undefined}
    label={boolean("Has Label", true) ? "Label" : undefined}
    value={boolean("Has Input Text", true) ? "Input Text" : undefined}
    helperText={
      boolean("Has Helper Text", true) ? "Helpful Helper Text" : undefined
    }
    variant={select("Label Variant", VARIANT_OPTIONS, VARIANT_OPTIONS.Standard)}
  />
);
