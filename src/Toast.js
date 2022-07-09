import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import vendingMachineImg from "./VendingMachine.png";
import toastImg from "./toast.png";

function Toast() {
  return (
    <div
className="VendingMachine"
style={{ backgroundImage: `url(${vendingMachineImg})` }}>
  <Message>
        <h1>Toast</h1>
        <img src= {toastImg} alt="toast" height="200" width="200"/>
        </Message>
        <h1>
        <Message> 
          <Link to="/">go back</Link>
          </Message>
        </h1>
    </div>
  );
}

export default Toast;




