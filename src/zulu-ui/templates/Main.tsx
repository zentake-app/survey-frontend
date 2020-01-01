import React, { useState } from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { ZuluAppBar } from "../components/surfaces/AppBar";
import { ZuluSidebar, ZuluNavigationItem } from "../organisms/Sidebar";
import { ZuluMainFooter } from "../organisms/Footer";
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
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: "100%"
  }
}));

interface MainTemplateProps {
  navigationItems: ZuluNavigationItem[];
  title?: string;
  brandImageSource?: string;
  children: React.ReactNode;
}

const MainTemplate = ({
  navigationItems,
  children,
  title,
  brandImageSource
}: MainTemplateProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  });
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <ZuluAppBar
        pageTitle={title}
        leading={<AppBarBrandImage source={brandImageSource} />}
      />
      <ZuluSidebar navigationItems={navigationItems} />
      <main className={classes.content}>
        {children}
        <ZuluMainFooter />
      </main>
    </div>
  );
};

export { MainTemplate };
