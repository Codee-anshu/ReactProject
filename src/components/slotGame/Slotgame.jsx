import React from "react";
import './Slotgame.css';

const Slot = (props) => {
  
    if ((props.x === props.y) && (props.y === props.z)) {
        return(
           <>
             <h1>{props.x} {props.y} {props.z}</h1>
            <h3 style={{textAlign:"center"}}>This is matching</h3>
            <hr/>
           </>
        )

    }
    else{
        return(
            <>
              <h1>{props.x} {props.y} {props.z}</h1>
             <h3 style={{textAlign:"center"}}>This is not matching</h3>
             <hr/>
            </>
         )

    }
}

function Slotgame() {
    return (
        <>
            <div className="heading">
                <h1>🎰 Welcome to <span>Slot Machine Game</span> 🎰</h1>
            </div>
            <div style={{width:"30%",margin:"auto",border:"1px solid black",boxShadow:"2px 2px 2px  rgba(0, 0, 0, 0.305)"}}>

                <Slot x="😊" y="😊" z="😊" />
                <Slot x="🤦‍♀️" y="😊" z="😊" />
                <Slot x="⛅" y="🤡" z="⛺"/>
                <Slot x="😍" y="😍" z="😍"/>
            </div>
        </>

    );
}

export default Slotgame;