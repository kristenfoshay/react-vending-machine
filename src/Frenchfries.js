import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import vendingMachineImg from "./VendingMachine.png";
import frenchFriesImg from "./frenchfries.png";

function Frenchfries() {
  return (
    <div
    className="VendingMachine"
    style={{ backgroundImage: `url(${vendingMachineImg})` }}>
      <Message>
        <h1>French Fries</h1>
        <img src= {frenchFriesImg} alt="french fries" height="200" width="200"/>
        </Message>
        <Message>
        <h1>
          <Link to="/">go back</Link>
        </h1>
        </Message>
    </div>
  );
}

export default Frenchfries;