import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    img: {
        "background-position": "center",
        "background-repeat": "no-repeat",
        height: "140px",
        "background-size": "contain",
      },
}));


interface Props {
    imageURL: string;
}


export const ProductImage = ({ imageURL }: Props) => {
    const classes = useStyles();

    return (
        <div>
          <div
            className={classes.img}
            style={{ backgroundImage: `url('${imageURL}')` }}
          ></div>
        </div>
    );
}