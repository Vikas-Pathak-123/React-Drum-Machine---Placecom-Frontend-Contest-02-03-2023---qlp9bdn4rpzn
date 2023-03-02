import React, { useState } from "react";
import Pad from "./Pad";
import {bank1} from "./App"


function Pads() {
    const keypadCode = Object.keys(bank1);
    const [displayText, setDisplayText] = useState(" ");
    const [power,setPower] = useState(true);
    const[volume,setVolume] = useState(0.5);



    const playSound = (e) => {
      if(power){
        const audio =e.target.querySelector("audio");
        audio.volume = volume;
        audio.currentTime =0;
        audio.play();
        setDisplayText(bank1[e.target.innerText].name);
      }
    };
    const togglePower =(e)=>{
      setPower(e.target.checked);
      if(e.target.checked){
        setDisplayText(" ");
      }else{
        setDisplayText("Power Off");
      }
    };
    const adjustVolume = (e)=>{
      setVolume(e.target.value);
      setDisplayText(`Volume:${Math.round(e.target.value*100)}%`);
    };


    return (
      <div id='div-pads'>
        {keypadCode.map((pad, idx) => {
          console.log(pad + idx)
          return (
            <Pad
              id={pad+idx}
              key={pad+idx}
              handleClick={playSound}
              element={pad}
              power={power}
              backgroundStyle={power?"":"#1c1c1c"} />
          );
        })}
        <div id='display'>{displayText}</div>  
      </div>
    )
  }

  export default Pads ; 