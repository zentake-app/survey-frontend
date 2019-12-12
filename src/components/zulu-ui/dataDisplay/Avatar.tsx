import * as React from 'react';
import {Avatar} from '@material-ui/core';

export interface ZuluAvatarProps {
  displayText: string;
}
const ZuluAvatar = ({displayText}: ZuluAvatarProps) => {
  return <Avatar>{displayText}</Avatar>;
};

export {ZuluAvatar};
