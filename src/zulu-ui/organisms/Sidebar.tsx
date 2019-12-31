import React from "react";
import {
  List,
  Drawer,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";
import { ZuluSidebarButton } from "../molecules/SidebarButton";

export type ZuluNavigationItem = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

export interface ZuluSidebarProps {
  navigationItems: ZuluNavigationItem[];
}

const renderNavigationItem = (navigationItem: ZuluNavigationItem) => (
  <ZuluSidebarButton
    icon={navigationItem.icon}
    text={navigationItem.label}
    to={navigationItem.value}
  />
);

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    drawer: {
      width: 240,
      [theme.breakpoints.up("lg")]: {
        marginTop: 64,
        height: "calc(100% - 64px)"
      }
    }
  });
});

const ZuluSidebar = ({ navigationItems }: ZuluSidebarProps) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      open={true}
      variant="persistent"
    >
      <List>{navigationItems.map(renderNavigationItem)}</List>
    </Drawer>
  );
};

export { ZuluSidebar };
