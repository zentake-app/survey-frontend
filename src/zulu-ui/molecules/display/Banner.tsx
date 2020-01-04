import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles } from "@material-ui/core";

interface ZuluBannerProps {
  bannerText: string;
  bannerIcon?: React.ReactNode;
  bannerActions?: { text: string; onClick: () => void }[];
  handleDismiss: () => void;
}

const useStyles = makeStyles(theme => {
  return createStyles({
    root: {
      minHeight: 70,
    }
  });
});

function ZuluBanner({
  bannerText,
  bannerActions = [],
  bannerIcon,
  handleDismiss = () => {}
}: ZuluBannerProps) {
  const styles = useStyles();
  return (
    <>
      <CssBaseline />
      <Paper elevation={0} className={styles.root}>
        <Box pt={2} pr={1} pb={1} pl={2}>
          <Grid container spacing={1} alignItems="center" wrap="nowrap">
            {bannerIcon && (
              <Grid item>
                <Box bgcolor="primary.main" clone>
                  <Avatar>{bannerIcon}</Avatar>
                </Box>
              </Grid>
            )}
            <Grid item>
              <Typography>{bannerText}</Typography>
            </Grid>
          </Grid>
          <Grid container justify="flex-end" spacing={8}>
            {bannerActions.map(action => {
              return (
                <Grid item>
                  <Button color="primary" onClick={action.onClick}>
                    {action.text}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Paper>
      <Divider />
    </>
  );
}

export { ZuluBanner };
