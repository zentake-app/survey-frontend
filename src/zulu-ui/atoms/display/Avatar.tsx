import React from "react";
import { Avatar } from "@material-ui/core";

export interface ZuluAvatarProps {
  subjectName?: string;
  subjectImageSource?: string;
}

const getInitials = (subjectName: string) =>
  subjectName
    .split(" ")
    .map(w => w[0])
    .splice(0, 2)
    .join("");

const ZuluAvatar = ({ subjectImageSource, subjectName }: ZuluAvatarProps) => {
  return (
    <Avatar alt={subjectName} src={subjectImageSource}>
      {subjectImageSource ? undefined : getInitials(subjectName || "")}
    </Avatar>
  );
};

export { ZuluAvatar };
