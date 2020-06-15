import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Stickers } from "../../interfaces";
import { Header } from "./Header";
import { ProductImage } from "./ProductImage";
import { ContentArea } from "./ContentArea";
import { LogoArea } from "./LogoArea";
import { ButtonsArea } from "./ButtonsArea";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "7cm",
    width: "4.58cm",
    float: "left",
    "max-width": "4.58cm",
    "max-height": "7cm",
    "font-size": "13px",
    "text-transform": "uppercase",

    // border: "1px solid",
  },
  wrapper: {
    padding: "5px",
    position: "relative",
  },
  textWrapper: {
    height: "90px",
  },
  flex: {
    display: "flex",
    "justify-content": "space-around",
  },
}));


interface Props {
  sticker: Stickers;
  formViewStatus: boolean;
  itemKey: number;
  stickersList: Stickers[];
  setStickersList: (stickersList: Stickers[]) => void;
  setFormState: React.Dispatch<React.SetStateAction<Stickers>>;
}


export const PrintCube = ({ sticker, itemKey, stickersList, setStickersList, setFormState, formViewStatus }: Props) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.textWrapper}>
          <Header date={sticker.date} quantity={sticker.quantity} orderID={sticker.orderID} />
          <ContentArea sticker={sticker} />
        </div>

        <ProductImage imageURL={sticker.image} />
        <LogoArea />
        {(formViewStatus ?
          <ButtonsArea
            sticker={sticker}
            itemKey={itemKey}
            setFormState={setFormState}
            stickersList={stickersList}
            setStickersList={setStickersList} />
          : null
        )}
      </div>
    </div>
  );
}
