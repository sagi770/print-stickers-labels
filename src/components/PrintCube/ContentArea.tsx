import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Stickers, MaterialObject } from "../../interfaces";

const useStyles = makeStyles((theme) => ({
    checkbox: {
        padding: "0 4px",
    },
}));

interface Props {
    sticker: Stickers;
}

const material: MaterialObject = {
    silver: "Silver",
    rose_gold: "Rose Gold",
    gold_plated: "24k Gold Plated",
    gold: "14k Yellow",
    white_gold: "14k White Gold",
};

export const ContentArea = ({ sticker }: Props) => {
    const classes = useStyles();

    return (
        <div>
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
    );
}