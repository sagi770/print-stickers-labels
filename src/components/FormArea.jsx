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

export function FormArea({ setStickersList, stickersList, setFormViewStatus }) {
  const classes = useStyles();

  const today = new Date();
  today.setDate(new Date().getDate() + 1);

  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const newDate = yyyy + "-" + mm + "-" + dd;

  const [formState, setFormState] = useState({
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

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const hideForm = () => {
    setFormViewStatus(false);
  };

  const handleCheckboxChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.checked });
  };

  const materialHandleChange = (event) => {
    setFormState({
      ...formState,
      material: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStickersList((stickersList) => [...stickersList, formState]);
  };

  return (
    //TODO:remove name 
    //TODO: no form need use onclick
    //change export use {} function 
    <Grid container className={classes.root}>
      <form onSubmit={handleSubmit}>
        <h2>Please Write Sticker info:</h2>
        <FormControl className={classes.FormControl}>
          <TextField type="date" name="date" value={formState.date} />
        </FormControl>
        <FormControl className={classes.FormControl}>
          <TextField
            onChange={handleChange}
            label="orderID"
            name="orderID"
            variant="outlined"
            value={formState.orderID}
          />
        </FormControl>
        <FormControl className={classes.FormControl}>
          <TextField
            onChange={handleChange}
            label="Quantity"
            name="quantity"
            variant="outlined"
            value={formState.quantity}
          />
        </FormControl>

        <FormControl className={classes.FormControlSelect}>
          <InputLabel id="demo-simple-select-label">Choose material</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
        <FormControl className={classes.FormControl}>
          <TextField
            onChange={handleChange}
            label="Chain Length"
            name="chainLength"
            variant="outlined"
            value={formState.chainLength}
          />
        </FormControl>
        <FormControl className={classes.FormControl}>
          <TextField
            onChange={handleChange}
            label="Line 1"
            name="line1"
            variant="outlined"
            value={formState.line1}
          />
        </FormControl>
        <FormControl className={classes.FormControl}>
          <TextField
            onChange={handleChange}
            label="Line 2"
            name="line2"
            variant="outlined"
            value={formState.line2}
          />
        </FormControl>
        <FormControl className={classes.FormControl}>
          <TextField
            onChange={handleChange}
            label="Image"
            name="image"
            variant="outlined"
            value={formState.image}
          />
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={formState.gift}
              onChange={handleCheckboxChange}
              name="gift"
              color="primary"
            />
          }
          label="Gift"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formState.fast}
              onChange={handleCheckboxChange}
              name="fast"
              color="primary"
            />
          }
          label="It's Fast"
        />
        <div className={classes.button}>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
          <Button variant="contained" onClick={hideForm}>
            Print
          </Button>
          <Button variant="contained" color="secondary">
            Empty
          </Button>
        </div>
      </form>
    </Grid>
  );
}
