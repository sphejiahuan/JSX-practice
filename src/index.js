//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";

//It should display a h1 heading.
const fname = "Angela";
const lname = "Yu";
const num = "7";

ReactDom.render(
  <div>
    {/* <h1>hello {fname + ' ' + lname} </h1> */}
    <h1>hello {`${fname} ${lname}`} </h1>
    <p> your lucky number is {Math.random()} </p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </div>,
  document.getElementById("root")
);

//It should display an unordered list (bullet points).
//It should contain 3 list elements.
