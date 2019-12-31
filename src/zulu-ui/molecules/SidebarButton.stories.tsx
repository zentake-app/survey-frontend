import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { ZuluSidebarButton } from "./SidebarButton";
import { AcUnit } from "@material-ui/icons";
export default {
  title: "Zentake Design Language|Molecules/Sidebar",
  decorators: [withKnobs]
};

export const sidebarButton = () => {
  return (
    <ZuluSidebarButton
      text={text("Button Text", "Lorem Ipsum")}
      icon={<AcUnit />}
      to=""
    />
  );
};
