import React, { useState } from "react";
import {
  FormControl,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Stickers } from "../../interfaces";
import { FormControlElement } from "./FormControlElement";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "280px",
    float: "left",
  },
  FormControl: {
    "margin-bottom": "15px",
    "max-width": "300px",
    display: "block",
  },
  FormControlSelect: {
    "margin-bottom": "15px",
    width: "200px",
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

interface Props {
  setStickersList: React.Dispatch<React.SetStateAction<Stickers[]>>;
  stickersList: Stickers[];
  setFormViewStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FormArea({ setStickersList, stickersList, setFormViewStatus }: Props) {
  const classes = useStyles();

  const today = new Date();
  today.setDate(new Date().getDate() + 1);

  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const newDate = yyyy + "-" + mm + "-" + dd;

  const [formState, setFormState] = useState<Stickers>({
    orderID: "11",
    date: newDate,
    quantity: "",
    material: "silver",
    chainLength: "",
    line1: "line1",
    line2: "line2",
    image:
      "https://instagram.ftlv6-1.fna.fbcdn.net/v/t51.2885-15/e15/s320x320/98331657_291805631844341_3782185453709637350_n.jpg?_nc_ht=instagram.ftlv6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=S3XzhPEIHGgAX_z8V84&oh=666e229c5f174508a405cb4895b9043b&oe=5F0A1887",
    gift: false,
    fast: false,
  });

  const hideForm = () => {
    setFormViewStatus(false);
  };

  const emptyStickers = () => {
    setFormState({
      orderID: "",
      date: newDate,
      quantity: "",
      material: "",
      chainLength: "",
      line1: "",
      line2: "",
      image: "",
      gift: false,
      fast: false,
    } as Stickers);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.checked });
  };

  const materialHandleChange = (event: React.ChangeEvent<{ name?: string | undefined; value: any; }>) => {
    setFormState({
      ...formState,
      material: event.target.value,
    });
  };

  const handleSubmit = () => {
    setStickersList((stickersList) => [...stickersList, formState]);
    // emptyStickers();//TODO:remove it!!
  };

  return (
    <Grid container className={classes.root}>
      <h2>Please Write Sticker info:</h2>
      <FormControlElement name="date" label="date" type="date" value={formState.date} formState={formState} setFormState={setFormState} />
      <FormControlElement name="orderID" label="orderID" value={formState.orderID} formState={formState} setFormState={setFormState} />
      <FormControlElement name="quantity" label="Quantity" value={formState.quantity} formState={formState} setFormState={setFormState} />


      <FormControl className={classes.FormControlSelect}>
        <InputLabel id="demo-simple-select-label">Choose material</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="material"
          value={formState.material}
          onChange={materialHandleChange}
        >
          <MenuItem value="silver">Silver</MenuItem>
          <MenuItem value="rose_gold">Rose Gold</MenuItem>
          <MenuItem value="gold_plated">Gold Plated</MenuItem>
          <MenuItem value="gold">14k Yellow Gold</MenuItem>
          <MenuItem value="white_gold">14k White Gold</MenuItem>
        </Select>
      </FormControl>
      <FormControlElement name="chainLength" label="Chain Length" value={formState.chainLength} formState={formState} setFormState={setFormState} />
      <FormControlElement name="line1" label="line 1" value={formState.line1} formState={formState} setFormState={setFormState} />
      <FormControlElement name="line2" label="line 2" value={formState.line2} formState={formState} setFormState={setFormState} />
      <FormControlElement name="image" label="Image" value={formState.image} formState={formState} setFormState={setFormState} />

      <FormControlLabel
        control={
          <Checkbox
            checked={formState.gift}
            onChange={handleCheckboxChange}
            color="primary"
          />
        }
        label="Gift"
        name="gift"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formState.fast}
            onChange={handleCheckboxChange}
            color="primary"
          />
        }
        label="It's Fast"
        name="fast"
      />
      <div className={classes.button}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add
          </Button>
        <Button variant="contained" onClick={hideForm}>
          Print
          </Button>
        <Button variant="contained" color="secondary" onClick={emptyStickers}>
          Empty
          </Button>
      </div>
    </Grid>
  );
}
