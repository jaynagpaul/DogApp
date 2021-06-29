import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 300
  },
  margin: {
    height: theme.spacing(3),
  },
  markLabel: {
    color: 'blue',
  },
}));

const marks = (...labels) => {
  return labels.map((label, idx) => {
    return { value: idx, label };
  });
};

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  const [total, setTotal] = React.useState(0);
  const [questionaire, setQuestionaire] = React.useState('load');
  function updateTotal() {
    var t = 0;
    for (var el of document.querySelectorAll('.testa')) {
      t += parseInt(el.children[2].value);
    }

    setTotal(t);
  }
  function makeQuestion(text, ...labels) {
    return (
      <>
        <Typography
          style={{ marginTop: 20 }}
          id="discrete-slider-custom"
          gutterBottom
        >
          {text}
        </Typography>
        <Slider
          className="testa"
          classes={{ markLabel: { color: 'blue' } }}
          defaultValue={0}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          step={1}
          max={4}
          onChange={updateTotal}
          valueLabelDisplay="auto"
          // marks={marks(...labels)}
          marks={true}
        />
      </>
    );
  }

  const classes = useStyles();

  return (
    <div style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Questionaire
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={questionaire}
          onChange={(ev) => {
            setQuestionaire(ev.target.value);
          }}
          label="Questionaire"
        >
          <MenuItem value="load">LOAD</MenuItem>
          <MenuItem value="helsinki">Helsinki Chronic Pain Index</MenuItem>
        </Select>
      </FormControl>

      {questionaire === 'load' ? LOAD(makeQuestion) : Helsinki(makeQuestion)}
      {/* Total: {total} */}
    </div>
  );
}

function Helsinki(makeQuestion) {
  return (
    <>
      {makeQuestion('', 'Very good', 'Good', 'Fair', 'Poor', 'Very poor')}
      {makeQuestion(
        'How disabled is your dog by his/her lameness?',
        'Not at all disabled',
        'Slightly disabled',
        'Moderately disabled',
        'Severely disabled',
        'Extremely disabled'
      )}
      {makeQuestion(
        'How active is your dog?',
        'Extremely active',
        'Very active',
        'Moderately active',
        'Slightly active',
        'Not at all active'
      )}
      {makeQuestion(
        "What is the effect of cold, damp weather on your dog's lameness?",
        'No effect',
        'Mild effect',
        'Moderate effect',
        'Severe effect',
        'Extreme effect'
      )}
      {makeQuestion(
        'To what degree does your dog show stiffness in the affected leg after a ‘lie down’?',
        'No stiffness',
        'Mild stiffness',
        'Moderate stiffness',
        'Severe stiffness',
        'Extreme stiffness'
      )}
      {makeQuestion(
        'At exercise, how active is your dog?',
        'Extremely active',
        'Very active',
        'Fairly active',
        'Not very active',
        'Not at all active'
      )}
      {makeQuestion(
        'How interested is your dog in exercising?',
        'Extremely interested',
        'Very interested',
        'Fairly interested',
        'Not very interested',
        'Not at all interested'
      )}
      {makeQuestion(
        "How would you rate your dog's ability to exercise?",
        'Very good',
        'Good',
        'Fair',
        'Poor',
        'Very poor'
      )}
      {makeQuestion(
        "What overall effect does exercise have on your dog's lameness?",
        'No effect',
        'Mild effect',
        'Moderate effect',
        'Severe effect',
        'Extreme effect'
      )}
      {makeQuestion(
        'How often does your dog rest (stop/sit down) during exercise?',
        'Never',
        'Hardly ever',
        'Occasionally',
        'Frequently',
        'Very frequently'
      )}
      {makeQuestion(
        "What is the effect of cold, damp weather on your pet's ability to exercise?",
        'No effect',
        'Mild effect',
        'Moderate effect',
        'Severe effect',
        'Extreme effect'
      )}
      {makeQuestion(
        'To what degree does your dog show stiffness in the affected leg after a ‘lie down’ following exercise?',
        'No stiffness',
        'Mild stiffness',
        'Moderate stiffness',
        'Severe stiffness',
        'Extreme stiffness'
      )}
      {makeQuestion(
        "What is the effect of your dog's lameness on his/her ability to exercise?",
        'No effect',
        'Mild effect',
        'Moderate effect',
        'Severe effect',
        'Extreme effect'
      )}
    </>
  );
}

function LOAD(makeQuestion) {
  return (
    <>
      {makeQuestion(
        'How is your dog’s mobility in general?',
        'Very good',
        'Good',
        'Fair',
        'Poor',
        'Very poor'
      )}
      {makeQuestion(
        'How disabled is your dog by his/her lameness?',
        'Not at all disabled',
        'Slightly disabled',
        'Moderately disabled',
        'Severely disabled',
        'Extremely disabled'
      )}
      {makeQuestion(
        'How active is your dog?',
        'Extremely active',
        'Very active',
        'Moderately active',
        'Slightly active',
        'Not at all active'
      )}
      {makeQuestion(
        "What is the effect of cold, damp weather on your dog's lameness?",
        'No effect',
        'Mild effect',
        'Moderate effect',
        'Severe effect',
        'Extreme effect'
      )}
      {makeQuestion(
        'To what degree does your dog show stiffness in the affected leg after a ‘lie down’?',
        'No stiffness',
        'Mild stiffness',
        'Moderate stiffness',
        'Severe stiffness',
        'Extreme stiffness'
      )}
      {makeQuestion(
        'At exercise, how active is your dog?',
        'Extremely active',
        'Very active',
        'Fairly active',
        'Not very active',
        'Not at all active'
      )}
      {makeQuestion(
        'How interested is your dog in exercising?',
        'Extremely interested',
        'Very interested',
        'Fairly interested',
        'Not very interested',
        'Not at all interested'
      )}
      {makeQuestion(
        "How would you rate your dog's ability to exercise?",
        'Very good',
        'Good',
        'Fair',
        'Poor',
        'Very poor'
      )}
      {makeQuestion(
        "What overall effect does exercise have on your dog's lameness?",
        'No effect',
        'Mild effect',
        'Moderate effect',
        'Severe effect',
        'Extreme effect'
      )}
      {makeQuestion(
        'How often does your dog rest (stop/sit down) during exercise?',
        'Never',
        'Hardly ever',
        'Occasionally',
        'Frequently',
        'Very frequently'
      )}
      {makeQuestion(
        "What is the effect of cold, damp weather on your pet's ability to exercise?",
        'No effect',
        'Mild effect',
        'Moderate effect',
        'Severe effect',
        'Extreme effect'
      )}
      {makeQuestion(
        'To what degree does your dog show stiffness in the affected leg after a ‘lie down’ following exercise?',
        'No stiffness',
        'Mild stiffness',
        'Moderate stiffness',
        'Severe stiffness',
        'Extreme stiffness'
      )}
      {makeQuestion(
        "What is the effect of your dog's lameness on his/her ability to exercise?",
        'No effect',
        'Mild effect',
        'Moderate effect',
        'Severe effect',
        'Extreme effect'
      )}
    </>
  );
}
