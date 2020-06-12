import React from "react";
import { makeStyles } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
  },
}));

function ShowButton({ setFormViewStatus }) {
  const classes = useStyles();

  const showForm = () => {
    setFormViewStatus(true);
  };

  return (
    <div className={classes.root}>
      <VisibilityIcon className="pointer" onClick={showForm} />
    </div>
  );
}

export default ShowButton;
