import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { MainTemplate } from "./Main";
import NavigationItems from "../../routes/common/NavigationItems";
import BrandImage from "../../assets/images/brandImage.png";

export default {
  title: "Zentake Design Language|Templates/Main Template",
  decorators: [withKnobs]
};

export const main = () => {
  return (
    <MainTemplate
      title="Lorem Ipsum"
      navigationItems={NavigationItems.forUser({})}
      brandImageSource={BrandImage}
    >
      <div />
    </MainTemplate>
  );
};
