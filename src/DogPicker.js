import db from './db';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useLiveQuery } from 'dexie-react-hooks';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   // width: 300
  // },
  margin: {
    height: theme.spacing(3),
  },
  markLabel: {
    color: 'blue',
  },
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

export default function DogPicker(props) {
  const dogs = useLiveQuery(() => db.dogs.toArray());
  const classes = useStyles();
  const [dog, setDog] = React.useState('');

  const handleChange = (e) => {
    setDog(e.target.value);
    props.onChange(e.target.value);
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Dog</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        label="Dog"
        value={dog}
        onChange={handleChange}
      >
        {dogs
          ? dogs.map((dog) => <MenuItem value={dog.id}>{dog.name}</MenuItem>)
          : null}
      </Select>
    </FormControl>
  );
}
