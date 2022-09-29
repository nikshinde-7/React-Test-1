/* eslint-disable no-alert */
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import DisplayText from './components/DisplayText';
import InputTextBox from './components/TextBox';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  return (
    <div className="App">
      <h2> Task - 1 </h2>

      <InputTextBox value={inputValue} handleChange={setInputValue} placeholder="Start typing..!" />

      <Button
        label="Submit text"
        className="mb-2 mt-2"
        handleChange={() => {
          setDisplayValue(inputValue);
          setInputValue('');
        }}
      />

      <DisplayText className="mb-2 mt-2" text={displayValue} />
    </div>
  );
};

export default App;
