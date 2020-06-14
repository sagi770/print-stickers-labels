import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HighlightOff, Edit } from "@material-ui/icons";
import { Stickers, MaterialObject } from "../../interfaces";
import { Header } from "./Header";
import { ProductImage } from "./ProductImage";
import { LogoArea } from "./LogoArea";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "6cm",
    width: "4.58cm",
    float: "left",
    "max-width": "4.58cm",
    "max-height": "6cm",
    "font-size": "13px",
    "text-transform": "uppercase",

    border: "1px solid",
  },
  wrapper: {
    padding: "5px",
    position: "relative",
  },
  textWrapper: {
    height: "80px",
  },
  buttonsWarper: {
    position: "absolute",
    bottom: "7px",
    width: "157px",
    height: "20px",
  },
  checkbox: {
    padding: "0 4px",
  },
  flex: {
    display: "flex",
    "justify-content": "space-around",
  },
}));


interface Props {
  sticker: Stickers;
  itemKey: number;
  stickersList: Stickers[];
  setStickersList: (stickersList: Stickers[]) => void;
}


const material: MaterialObject = {
  silver: "Silver",
  rose_gold: "Rose Gold",
  gold_plated: "24k Gold Plated",
  gold: "14k Yellow",
  white_gold: "14k White Gold",
};

export const PrintCube = ({ sticker, itemKey, stickersList, setStickersList }: Props) => {

  const classes = useStyles();


  const removeSticker = () => {
    const newList = stickersList.filter((item,index )=> index !== itemKey);
    setStickersList(newList);
  }

  //TODO: https://dev.to/pnkfluffy/passing-data-from-child-to-parent-with-react-hooks-1ji3
  const editSticker = () => {
    const newList = stickersList.filter((item,index )=> index !== itemKey);
    setStickersList(newList);
  }

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.textWrapper}>
          <Header date={sticker.date} quantity={sticker.quantity} orderID={sticker.orderID} />
          {/* ContentArea */}
          <div className="height-20">
            {sticker.gift ? (
              <div className={`${classes.checkbox} float-left silver`}>
                אריזת מתנה
              </div>
            ) : null}
            {sticker.fast ? (
              <div className="float-right silver">שליח עד הבית</div>
            ) : null}
          </div>
          <div className={`material-class-${sticker.material}`}>
            {material[sticker.material]}
          </div>
          <div>{sticker.line1}</div>
          <div>{sticker.line2}</div>
        </div>

        <ProductImage imageURL={sticker.image} />

        <LogoArea />


        <div className={classes.buttonsWarper}>
          <HighlightOff onClick={removeSticker} className="float-left pointer" />
          <Edit onClick={editSticker} className="float-right" />
        </div>

      </div>
    </div>
  );
}
