import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { ZuluAvatar } from "./Avatar";
export default {
  title: "Zentake Design Language|Atoms/display/Avatar",
  decorators: [withKnobs]
};

export const avatar = () => {
  return (
    <ZuluAvatar
      subjectImageSource={text(
        "Subject Profile Image",
        "https://via.placeholder.com/100"
      )}
      subjectName={text("Subject Name", "John Doe")}
    />
  );
};
