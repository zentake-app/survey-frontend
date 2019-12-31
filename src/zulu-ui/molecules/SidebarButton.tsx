import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import colors from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";

export interface ZuluSidebarButtonProps {
  text: string;
  icon?: React.ReactNode;
  to: string;
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {},
    item: {
      display: "flex",
      paddingTop: 0,
      paddingBottom: 0
    },
    button: {
      color: colors.blueGrey[800],
      padding: "10px 8px",
      justifyContent: "flex-start",
      textTransform: "none",
      letterSpacing: 0,
      width: "100%",
      fontWeight: theme.typography.fontWeightMedium
    },
    icon: {
      width: 24,
      height: 24,
      display: "flex",
      alignItems: "center",
      marginRight: theme.spacing(1)
    },
    active: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      "& $icon": {
        color: theme.palette.primary.main
      }
    }
  });
});

const ZuluSidebarButton = ({ text, icon }: ZuluSidebarButtonProps) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.item}>
      <Button className={classes.button}>
        <div className={classes.icon}>{icon}</div>
        {text}
      </Button>
    </ListItem>
  );
};

export { ZuluSidebarButton };
