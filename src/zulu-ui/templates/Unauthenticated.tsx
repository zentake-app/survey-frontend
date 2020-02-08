import React from "react";
import { makeStyles } from "@material-ui/core";
import { ZuluAppBar } from "../molecules/surfaces/AppBar";
import clsx from "clsx";
import { AppBarBrandImage } from "../../components/AppBarBrandImage";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 64
    }
  },
  content: {
    height: "100%",
    padding: "0 2rem"
  }
}));

interface UnauthenticatedTemplateProps {
  title?: string;
  navbarColor?: string;
  brandImageSource?: string;
  children: React.ReactNode;
}

const UnauthenticatedTemplate = ({
  children,
  title,
  brandImageSource
}: UnauthenticatedTemplateProps) => {
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.root]: true
      })}
    >
      <ZuluAppBar
        pageTitle={title}
        leading={<AppBarBrandImage source={brandImageSource} />}
      />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export { UnauthenticatedTemplate };
