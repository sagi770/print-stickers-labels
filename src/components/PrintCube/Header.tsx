import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({

    flex: {
        display: "flex",
        "justify-content": "space-around",
    },
}));

interface Props {
    date: string;
    quantity: string;
    orderID: string;
}

export const Header = ({ date, quantity, orderID }: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.flex}>
            <div className="display-inline">{moment(date).format('DD/MM')}</div>
            <div className="display-inline">{(quantity !== "" ? `X${quantity}` : null)}</div>
            <div className="display-inline">{(orderID !== "" ? `#${orderID}` : null)}</div>
        </div>
    );
}