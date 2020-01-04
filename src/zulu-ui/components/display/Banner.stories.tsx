import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { ZuluBanner } from "./Banner";
import Warning from "@material-ui/icons/Warning";
import faker from "faker/locale/en";
export default {
  title: "Zentake Design Language|Atoms/display/Banner",
  decorators: [withKnobs]
};

export const avatar = () => {
  return (
    <ZuluBanner
      bannerText={text("Banner Text", faker.lorem.sentence())}
      handleDismiss={() => {}}
      bannerIcon={<Warning />}
      bannerActions={[{ onClick: () => {}, text: "Dismiss" }]}
    />
  );
};
