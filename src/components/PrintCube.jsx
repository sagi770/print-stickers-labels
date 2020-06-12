import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HighlightOff, Edit } from "@material-ui/icons";

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
  img: {
    "background-position": "center",
    "background-repeat": "no-repeat",
    height: "140px",
    "background-size": "contain",
  },
  logoWrapper: {
    position: "absolute",
    left: "20%",
    bottom: "0px",
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

const material = {
  silver: "Silver",
  rose_gold: "Rose Gold",
  gold_plated: "24k Gold Plated",
  gold: "14k Yellow",
  white_gold: "14k White Gold",
};

function PrintCube({ sticker, itemKey }) {
  const classes = useStyles();
  console.log(sticker);
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.textWrapper}>
          <div className={classes.flex}>
            <div className="display-inline">{sticker.date}</div>
            <div className="display-inline">2</div>
            <div className="display-inline">#{sticker.orderID}</div>
          </div>
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
        <div>
          <div
            className={classes.img}
            style={{ backgroundImage: `url('${sticker.image}')` }}
          ></div>
        </div>
        <div className={classes.logoWrapper}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={classes.buttonsWarper}>
          <HighlightOff className="float-left pointer" />
          <Edit className="float-right" />
        </div>
      </div>
    </div>
  );
}

export default PrintCube;
