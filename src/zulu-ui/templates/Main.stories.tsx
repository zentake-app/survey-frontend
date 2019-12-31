import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { MainTemplate } from "./Main";
import { AcUnit, AccessAlarm, LiveHelp } from "@material-ui/icons";
import { ZuluNavigationItem } from "../organisms/Sidebar";
export default {
  title: "Zentake Design Language|Templates/Main Template",
  decorators: [withKnobs]
};

const navigationItems: ZuluNavigationItem[] = [
  { label: "Frosty", value: "", icon: <AcUnit /> },
  { label: "Snowman", value: "", icon: <AccessAlarm /> },
  { label: "Jolly", value: "", icon: <LiveHelp /> }
];

export const main = () => {
  return <MainTemplate navigationItems={navigationItems} />;
};
