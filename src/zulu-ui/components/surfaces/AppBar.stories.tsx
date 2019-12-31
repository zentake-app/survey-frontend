import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { ZuluAppBar } from "./AppBar";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { ZuluAvatar } from "../display/Avatar";
export default {
  title: "Zentake Design Language|Molecules/AppBar",
  decorators: [withKnobs]
};

export const appBar = () => {
  return (
    <ZuluAppBar
      pageTitle={text("Page Title", "Page Title")}
      leading={
        <img
          style={{
            maxHeight: "50px",
            marginRight: "1rem",
            width: "auto",
            objectFit: "contain"
          }}
          src={text(
            "Brand Image",
            "https://via.placeholder.com/200x100/2196f3/fff?text=Zulu"
          )}
        />
      }
      trailing={
        <ZuluAvatar subjectName={text("User's Name", "Spencer Dean")} />
      }
    />
  );
};