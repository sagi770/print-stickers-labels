import React from "react";
import {
    FormControl,
    TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Stickers } from "../../interfaces";

interface Props {
    name: string;
    label: string;
    value: string;
    type?: string;
    formState: Stickers;
    setFormState: React.Dispatch<React.SetStateAction<Stickers>>;
}

const useStyles = makeStyles((theme) => ({
    root: {
        "width": "250px",
        float: "left",
    },
    FormControl: {
        "margin-bottom": "15px",
        display: "block",
    },
}));


export const FormControlElement = ({ name, label, value, type, setFormState, formState }: Props) => {
    const classes = useStyles();

    const inputType = (type === "date" ? "date" : "text");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <FormControl className={classes.FormControl}>
            <TextField
                type={inputType}
                onChange={handleChange}
                label={label}
                name={name}
                variant="outlined"
                value={value}
            />
        </FormControl>
    );
}