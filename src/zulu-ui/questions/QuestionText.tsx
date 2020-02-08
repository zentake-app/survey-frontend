import React from "react";
import { Typography } from "@material-ui/core";
export function QuestionText({ questionText }: { questionText: string }) {
  return (
    <Typography variant="body1" component="p">
      {questionText}
    </Typography>
  );
}
