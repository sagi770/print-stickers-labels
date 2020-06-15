import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HighlightOff, Edit } from "@material-ui/icons";
import { Stickers } from "../../interfaces";

const useStyles = makeStyles((theme) => ({
    buttonsWarper: {
        position: "absolute",
        bottom: "-19px",
        width: "90px",
        left: "45px",
        height: "20px",
    },
}));

interface Props {
    sticker: Stickers;
    itemKey: number;
    stickersList: Stickers[];
    setStickersList: (stickersList: Stickers[]) => void;
    setFormState: React.Dispatch<React.SetStateAction<Stickers>>;
}

export const ButtonsArea = ({ sticker, stickersList, setStickersList, setFormState, itemKey }: Props) => {
    const classes = useStyles();

    const removeSticker = () => {
        const newList = stickersList.filter((item, index) => index !== itemKey);
        setStickersList(newList);
    }

    const editSticker = () => {
        setFormState(sticker);
        removeSticker();
    }

    return (
        <div className={classes.buttonsWarper}>
            <HighlightOff onClick={removeSticker} className="float-left pointer" />
            <Edit onClick={editSticker} className="float-right pointer" />
        </div>
    );
}