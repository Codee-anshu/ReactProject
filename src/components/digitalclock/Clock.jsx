import React, { useState } from "react";
import '../Hooks/Hooks.css'


function Clock() {
    let time = new Date().toLocaleTimeString();
    const [newTime,setTime]=useState(time);
    let update=()=>{
        time = new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(update,1000);
    return (
        <>
            <div className="content">
                <h1 style={{fontSize:"50px"}}>{time}</h1>
            </div>

        </>
    );

}


export default Clock;