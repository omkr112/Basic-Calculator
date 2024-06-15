import './App.css';
import {useState} from "react";
function App() {
  const [input,setInput] = useState('')
  const [final,setFinal] = useState('')

  const handleClick = (val) => {
    setInput(input+val);
  }

  const handleSpace = () => {
    setInput(input.slice(0, -1));
  };

  const handleClear = () => {
    setInput('')
    setFinal('')
  }

  const handleCalculate = () => {
    try {
      setFinal(eval(input).toString());
    } catch (error) {
      setFinal('Error');
    }
  };


  return (

    <div>
      <div className='disp'>
        <div className='input'>{input}</div>
        <div className='final'>{final}</div>
      </div>

    <div className='btn'>
      
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('*')}>*</button>
      <button onClick={handleSpace}>Cnl</button>
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={handleClear}>AC</button>
      <button onClick={() => handleClick('/')}>/</button>
      <button className='eqls' onClick={handleCalculate}>=</button>

    </div>

    </div>
  );
}

export default App;
