import React from "react";
function Calculator() {
    let a = Number(prompt("Enter A:"));
    let b = Number(prompt("Enter B:"));
    let sum = (a, b) => {
        return a + b;
    }

    let sub = (a, b) => {
        return b - a;
    }
    let mul = (a, b) => {
        return a * b;
    }
    let div = (a, b) => {
        return a / b;
    }
    return (
        <>
            <h1 style={{ textAlign: "center", color: "black" }}>Simple Calculator</h1>
            <ol style={{margin:"20px",textAlign:"center",listStyle:"none",padding:"10px",fontSize:"20px"}}>
                <li>{(`The Addition is:${sum(a, b)}`)}</li>
                <li>{(`The Substraction is:${sub(a, b)}`)}</li>
                <li>{(`The Multiplication is:${mul(a, b)}`)}</li>
                <li>{(`The Division is:${div(a, b)}`)}</li>
            </ol>
        </>
    )
}
export default Calculator;