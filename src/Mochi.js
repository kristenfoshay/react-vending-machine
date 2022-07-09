import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import vendingMachineImg from "./VendingMachine.png";
import mochiImg from "./mochi.png";

function Mochi() {
  return (
    <div
    className="VendingMachine"
    style={{ backgroundImage: `url(${vendingMachineImg})` }}>
      <Message>
        <h1>Mochi</h1>
        <img src= {mochiImg} alt="mochi" height="200" width="255"/>
        </Message>
        <Message>
        <h1>
          <Link to="/">go back</Link>
        </h1>
        </Message>
    </div>
  );
}

export default Mochi;
