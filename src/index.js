import React from "react";
import ReactDOM  from "react-dom";

var name="Balaji A"

var currDate= new Date().toLocaleDateString()
var currtime = new Date().toLocaleTimeString()

ReactDOM.render(
  <>
  <h1>{`hey hello my self ${name} how are you....!`}</h1>
  <p>{`todays date is = ${currDate} `}</p>
  <h2>{`todays time is =${currtime}`}</h2>
  
  </>,document.getElementById("root")

 
);