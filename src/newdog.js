import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));
const defaultBreeds = "Golden Retriever\nLabrador Retriever\nDachshund\nShih Tzu\nMaltese dog\nGerman Shepherd\nBoxer\nBeagle\nFrench Bulldog\nYorkshire Terrier\nPoodle\nPug\nBorder Collie\nSiberian Husky\nChihuahua\nAustralian Shepherd\nBulldog\nPomeranian\nEnglish Cocker Spaniel\nMiniature Schnauzer\nRottweiler\nAmerican Pit Bull Terrier\nRough Collie\nBernese Mountain Dog\nDobermann\nSheltie\nCavalier King Charles Spaniel\nNewfoundland dog\nGreat Dane\nBoston Terrier\nBichon Frise\nPembroke Welsh Corgi\nWest Highland White Terrier\nWeimaraner\nBelgian Shepherd\nHavanese\nEnglish Mastiff\nGerman Shorthaired Pointer\nAkita\nBasset Hound\nSoft-coated Wheaten Terrier\nStaffordshire Bull Terrier\nVizsla\nPekingese\nCane Corso\nGoldendoodle\nEnglish Springer Spaniel\nJack Russell Terrier\nLabradoodle\nBrittany\nAlaskan Malamute\nShiba Inu\nRhodesian Ridgeback".split(
  "\n"
);
export default function NewDog() {
  const classes = useStyles();
  const [breed, setBreed] = React.useState("");

  const handleChange = (event) => {
    setBreed(event.target.value);
  };

  return (
    <form
      style={{ margin: "auto" }}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Breed</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={breed}
          onChange={handleChange}
          label="Breed"
        >
          <MenuItem value="Other">
            <em>Other</em>
          </MenuItem>
          {defaultBreeds.map((val, idx) => (
            <MenuItem value={val}>{val}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {breed === "Other" ? (
        <TextField id="outlined-basic" label="Breed Name" variant="outlined" />
      ) : null}
      <TextField id="outlined-basic" label="Age" variant="outlined" />
      <TextField id="outlined-basic" label="Weight" variant="outlined" />

      <Button variant="contained" color="primary">
        Add New Dog
      </Button>
    </form>
  );
}
