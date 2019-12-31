import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { ZuluSidebar, ZuluNavigationItem } from "./Sidebar";
import AcUnit from "@material-ui/icons/AcUnit";
import AccessAlarm from "@material-ui/icons/AccessAlarm"
import LiveHelp from "@material-ui/icons/LiveHelp"
export default {
  title: "Zentake Design Language|Organisms/Sidebar",
  decorators: [withKnobs]
};

const navigationItems: ZuluNavigationItem[] = [
  { label: "Frosty", value: "", icon: <AcUnit /> },
  { label: "Snowman", value: "", icon: <AccessAlarm /> },
  { label: "Jolly", value: "", icon: <LiveHelp /> }
];

export const sidebar = () => {
  return <ZuluSidebar navigationItems={navigationItems} />;
};
