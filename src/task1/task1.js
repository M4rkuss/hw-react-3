import React, {useState} from 'react';
import './task1.css';

function Btn (props) {
  const [btnBg, setBtnBg] = useState(props.bg);
  const [btnColor, setBtnColor] = useState(props.color);
  function btnClick () {
    document.getElementsByClassName('bottom-side')[0].style.backgroundColor = btnBg;
    document.getElementsByClassName('bottom-side')[0].style.color = btnColor;
  }

  return (
    <button onClick={btnClick} style={{backgroundColor: btnBg, color: btnColor}}>Click on me!</button>
  )
}

function Task1 (props) {
  const [blockText, setblockText] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, illo.");
  return (
    <div className="wrapper">
      <div className="top-side">
        <Btn bg="red" color="white"/>
        <Btn bg="green" color="yellow"/>
        <Btn bg="yellow" color="black"/>
      </div>
      <div className="bottom-side">
        {blockText}
      </div>
    </div>
  )
}

export default Task1;