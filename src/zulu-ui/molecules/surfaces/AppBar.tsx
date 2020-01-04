import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  });
});

export type ZuluAppBarPosition = "static";

export interface ZuluAppBarProps {
  position?: ZuluAppBarPosition;
  pageTitle?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

const ZuluAppBar = ({ pageTitle, leading, trailing }: ZuluAppBarProps) => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        {leading}
        <Typography variant="h6" className={classes.title}>
          {pageTitle}
        </Typography>
        {trailing}
      </Toolbar>
    </AppBar>
  );
};

export { ZuluAppBar };
