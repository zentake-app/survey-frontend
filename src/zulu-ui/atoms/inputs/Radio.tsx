import * as React from "react";
import RadioGroup, { RadioGroupProps } from "@material-ui/core/RadioGroup";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import { ZuluFormControlLabel } from "./Form";

export interface ZuluRadioProps extends RadioProps {
  label: string;
}

const ZuluRadio = ({ ...props }: ZuluRadioProps) => {
  return (
    <ZuluFormControlLabel label={props.label} control={<Radio {...props} />} />
  );
};

export interface ZuluRadioGroupProps extends RadioGroupProps {}
ZuluRadio.Group = ({ ...props }: ZuluRadioGroupProps) => {
  return <RadioGroup {...props} />;
};

export { ZuluRadio };
