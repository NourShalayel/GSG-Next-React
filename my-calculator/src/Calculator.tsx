/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')} className="operator">
          +
        </button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')} className="operator">
          -
        </button>

        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')} className="operator">
          *
        </button>

        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleResult} className="operator">
          =
        </button>
        <button onClick={() => handleButtonClick('/')} className="operator">
          /
        </button>
        <button onClick={handleDelete} className="delete">
          x
        </button>
      </div>
    </div>
  );
};

export default Calculator;
