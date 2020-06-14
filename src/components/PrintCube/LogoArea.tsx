import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  logoWrapper: {
    position: "absolute",
    left: "20%",
    bottom: "0px",
  },
}));

export const LogoArea = () => {
  const classes = useStyles();

  return (
    <div className={classes.logoWrapper}>
      <img src="/logo.png" alt="logo" />
    </div>
  );
}