import React from "react";
import {
  FormControl,
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
  formState: Stickers;
  setFormState: React.Dispatch<React.SetStateAction<Stickers>>;
  todayDate: string;
}

export function FormArea({ setStickersList, stickersList, formState, setFormState, setFormViewStatus, todayDate }: Props) {
  const classes = useStyles();

  const hideForm = () => {
    setFormViewStatus(false);
  };

  const emptyStickers = () => {
    setFormState({
      orderID: "",
      date: todayDate,
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
    emptyStickers();
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
          <MenuItem value="">None</MenuItem>
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
