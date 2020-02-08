import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { UnauthenticatedTemplate } from "./Unauthenticated";
import { Typography } from "@material-ui/core";

export default {
  title: "Zentake Design Language|Templates/Unauthenticated Template",
  decorators: [withKnobs]
};

export const main = () => {
  return (
    <UnauthenticatedTemplate
      title="Lorem Ipsum"
      brandImageSource={text(
        "Brand Image",
        "https://via.placeholder.com/700/200"
      )}
    >
      <div
        style={{
          height: "150vh",
          width: "100%",
          backgroundColor: "grey",
          flex: 1,
          justifyContent: "center",
          textAlign: "center",
          verticalAlign: "middle",
          alignItems: "center",
          display: "flex"
        }}
      >
        <Typography variant="h2" style={{ color: "darkgrey" }}>
          Content
        </Typography>
      </div>
    </UnauthenticatedTemplate>
  );
};
