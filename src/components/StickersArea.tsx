import React from "react";
import { PrintCube } from "./PrintCube/PrintCube";
import { makeStyles } from "@material-ui/core/styles";
import { Stickers } from "../interfaces";



export interface StickersAreaProps {
  stickersList: Stickers[];
  formViewStatus: boolean;
  setStickersList: (stickersList: Stickers[]) => void;
}

export const StickersArea: React.FC<StickersAreaProps> = ({ stickersList, formViewStatus, setStickersList }: StickersAreaProps) => {
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
    <PrintCube stickersList={stickersList} setStickersList={setStickersList} itemKey={i} key={i} sticker={sticker} />
  ));

  return <div className={classes.root}>{listItems}</div>;
}

