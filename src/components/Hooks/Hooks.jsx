import React, { useState } from "react";
import './Hooks.css'

function Hooks(){
    const [count,setCount]=useState(0);
    const increase=()=>{
        setCount(count +1);
    }
    return(
        <>
            <div className="content">
                <h1>{count}</h1>
                <button onClick={increase}>Click Here</button>
            </div>
        </>
    );

}

export default Hooks;