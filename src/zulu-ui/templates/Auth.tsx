import React from "react";
import { makeStyles } from "@material-ui/styles";
import { ZuluAppBar } from "../molecules/surfaces/AppBar";
import { AppBarBrandImage } from "../../components/AppBarBrandImage";

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
      <ZuluAppBar leading={<AppBarBrandImage />} />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export { ZuluAuthTemplate };
