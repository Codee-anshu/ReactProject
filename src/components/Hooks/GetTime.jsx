import React, { useState } from "react";
import './Hooks.css';

function GetTime(){
    let currTime= new Date().toLocaleTimeString();
    const [newTime, setTime]=useState(currTime)
    let reload=()=>{
        currTime= new Date().toLocaleTimeString();
        setTime(currTime);  
    }

    return(
        <>
            <div className="content">
                <h1>{newTime}</h1>
                <button onClick={reload}>Get Time</button>
            </div>
        </>
    );
}

export default GetTime;