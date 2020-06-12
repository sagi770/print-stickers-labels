import React from "react";
import PrintCube from "./PrintCube";
import { makeStyles } from "@material-ui/core/styles";

function StickersArea({ stickersList, formViewStatus }) {
  const elementWidth = formViewStatus ? "1305px" : "1060px";
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "0 0 0 38px",
      padding: "0px",
      width: elementWidth,
    },
  }));

  const classes = useStyles();

  const listItems = stickersList.map((sticker, i) => (
    <PrintCube itemKey={i} key={i} sticker={sticker} />
  ));

  return <div className={classes.root}>{listItems}</div>;
}

export default StickersArea;
