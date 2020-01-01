import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { AppBar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: "100%"
  },
  content: {
    height: "100%"
  }
}));

interface ZuluAuthTemplateProps {
  children: React.ReactNode;
}

const ZuluAuthTemplate = ({ children }: ZuluAuthTemplateProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export { ZuluAuthTemplate };
