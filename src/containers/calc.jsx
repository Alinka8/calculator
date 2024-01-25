import "./calc.style.css";
import React, {useState} from "react"

const Calculator=()=> {
  const [result, setResult] = useState("")

  const showResult =(e)=>{
    setResult(result.concat (e.target.name))
  }

const onClear = ()=>{
  setResult("")
}
const onDeleteHandler=()=>{
  setResult(result.slice(0,-1))
}

const onEqualClick = ()=>{
  try{
  setResult(eval(result).toString())
  } catch{
    setResult("Error")
    
  }
}
  
  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{result}</div>
          <div className='current-operand'>{result}</div>
          </div>
          <button id = "clear" onClick={onClear}className='span-two'>AC</button>
          <button className='span-two' onClick={onDeleteHandler}>DEL</button>
          <button name="/"onClick={showResult}>/</button>
          <button name="1"onClick={showResult}>1</button>
          <button name="2"onClick={showResult}>2</button>
          <button name="3"onClick={showResult}>3</button>
          <button name="*" onClick={showResult}>*</button>
          <button name="4"onClick={showResult}>4</button>
          <button name="5"onClick={showResult}>5</button>
          <button name="6"onClick={showResult}>6</button>
          <button onClick={showResult
          } name="+">+</button>
          <button name="7"onClick={showResult}>7</button>
          <button name="8"onClick={showResult}>8</button>
          <button name="9"onClick={showResult}>9</button>
          <button name="-"onClick={
            showResult}>-</button>
          <button onClick={showResult}name=".">.</button>
          <button name="0"onClick={showResult}>0</button>
          <button onClick={onEqualClick} id="equal" >=</button>
       
      


    </div>
  );
}

export default Calculator;
