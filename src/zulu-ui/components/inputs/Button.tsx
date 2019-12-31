import * as React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export type ZuluButtonVariant = "text" | "outlined" | "contained";
export type ZuluButtonColor = "default" | "inherit" | "primary" | "secondary";
export type ZuluButtonSize = "small" | "medium" | "large";
export interface ZuluButtonProps {
  text?: string;
  variant?: ZuluButtonVariant;
  color?: ZuluButtonColor;
  disabled?: boolean;
  size?: ZuluButtonSize;
}

const ZuluButton = function({
  text,
  variant = "contained",
  ...rest
}: ZuluButtonProps) {
  return (
    <Button variant={variant} {...rest}>
      {text}
    </Button>
  );
};

export interface ZuluButtonGroupProps extends ZuluButtonProps {
  children?: React.ReactNode;
}

ZuluButton.Group = ({ children, ...rest }: ZuluButtonGroupProps) => (
  <ButtonGroup {...rest}>{children}</ButtonGroup>
);

export { ZuluButton };
