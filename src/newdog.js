import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import db from './db';
import { useLiveQuery } from 'dexie-react-hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const defaultBreeds =
  'Golden Retriever\nLabrador Retriever\nDachshund\nShih Tzu\nMaltese dog\nGerman Shepherd\nBoxer\nBeagle\nFrench Bulldog\nYorkshire Terrier\nPoodle\nPug\nBorder Collie\nSiberian Husky\nChihuahua\nAustralian Shepherd\nBulldog\nPomeranian\nEnglish Cocker Spaniel\nMiniature Schnauzer\nRottweiler\nAmerican Pit Bull Terrier\nRough Collie\nBernese Mountain Dog\nDobermann\nSheltie\nCavalier King Charles Spaniel\nNewfoundland dog\nGreat Dane\nBoston Terrier\nBichon Frise\nPembroke Welsh Corgi\nWest Highland White Terrier\nWeimaraner\nBelgian Shepherd\nHavanese\nEnglish Mastiff\nGerman Shorthaired Pointer\nAkita\nBasset Hound\nSoft-coated Wheaten Terrier\nStaffordshire Bull Terrier\nVizsla\nPekingese\nCane Corso\nGoldendoodle\nEnglish Springer Spaniel\nJack Russell Terrier\nLabradoodle\nBrittany\nAlaskan Malamute\nShiba Inu\nRhodesian Ridgeback'.split(
    '\n'
  );
export default function NewDog() {
  const classes = useStyles();

  const [name, setName] = React.useState('');
  const [breed, setBreed] = React.useState('Golden Retriever');
  const [age, setAge] = React.useState(1);
  const [weight, setWeight] = React.useState(1);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleBreed = (event) => {
    setBreed(event.target.value);
  };

  const handleAge = (event) => {
    setAge(Number(event.target.value));
  };

  const handleWeight = (event) => {
    setWeight(Number(event.target.value));
  };

  const clearForm = () => {
    setName('');
    setBreed('Golden Retriever');
    setAge(1);
    setWeight(1);
  };

  // List existing dogs
  const dogs = useLiveQuery(() => db.dogs.where('age').below(100).toArray());

  return (
    <form
      style={{ margin: 'auto' }}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleName}
      />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Breed</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={defaultBreeds.includes(breed) ? breed : 'Other'}
          onChange={handleBreed}
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
      {!defaultBreeds.includes(breed) ? (
        <TextField
          id="outlined-basic"
          value={breed}
          onChange={handleBreed}
          label="Breed Name"
          variant="outlined"
        />
      ) : null}
      <TextField
        id="outlined-basic"
        type="Number"
        label="Age"
        variant="outlined"
        value={age}
        onChange={handleAge}
      />
      <TextField
        id="outlined-basic"
        type="Number"
        label="Weight"
        variant="outlined"
        value={weight}
        onChange={handleWeight}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={async () => {
          await db.dogs.add({
            name,
            breed,
            age,
            weight,
          });
        }}
      >
        Add New Dog
      </Button>

      {/* {dogs
        ? dogs.map((dog) => (
            <div key={dog.id}>
              <h2>{dog.name}</h2>
              <p>{dog.breed}</p>
              <p>{dog.age}</p>
              <p>{dog.weight}</p>
            </div>
          ))
        : null} */}
    </form>
  );
}
