import React from "react";
import { Typography } from "@material-ui/core";

export interface ZuluMainFooterProps {}

const ZuluMainFooter = (props: ZuluMainFooterProps) => {
  return (
    <div>
      <Typography variant="body1">
        &copy;&nbsp;Zentake&nbsp;{new Date().getFullYear()}
      </Typography>
    </div>
  );
};

export { ZuluMainFooter };
