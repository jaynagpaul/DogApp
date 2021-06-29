import React from 'react';
import ReactDOM from 'react-dom';
import Questionaire from './questionaire';
import Chart from './chart';
import NavBar from './navbar';
import NewDog from './newdog';
import Welcome from './welcome';
function App() {
  const vals = React.useState(3); // Default to Welcome screen
  const [value, setValue] = vals;
  return (
    <>
      <div style={{ paddingBottom: '65px' }}>
        {value === 0 && <Questionaire />}
        {value === 1 && <Chart />}
        {value === 2 && <NewDog />}
        {value === 3 && <Welcome setval={setValue} />}
      </div>
      {value !== 3 && <NavBar vals={vals} />}
    </>
  );
}
ReactDOM.render(
  <div>
    <App />
  </div>,
  document.querySelector('#root')
);
