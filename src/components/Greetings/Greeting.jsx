import React from "react";
import './Greeting.css'

function Greeting() {
    let curDate = new Date();
    curDate = curDate.getHours();
    // curDate = 22
    let greeting = '';
    let cssStyle = {};

    if (curDate >= 0) {
        greeting = " Midnight🌟";
        cssStyle.color = "black"
    }
    if (curDate >= 1 && curDate < 12) {
        greeting = " Good Morning🌞";
        cssStyle.color = "rgb(6, 101, 6)";
    }
    if (curDate >= 12) {
        greeting = " Good Noon🌞";
        cssStyle.color = "rgb(245,200,6)";

    }
    if (curDate >= 13 && curDate < 17) {
        greeting = " Good Afternoon🌅";
        cssStyle.color = "yellow"
    }
    if (curDate >= 17 && curDate < 20) {
        greeting = " Good Evening🌇";
        cssStyle.color = "orange"

    }
    if (curDate >= 20 && curDate < 23) {
        greeting = " Good Nignt🌃";
        cssStyle.color = "black"

    }

    return (
        <div >
            <div id='box'><h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1></div>
        </div>
    )
}

export default Greeting;