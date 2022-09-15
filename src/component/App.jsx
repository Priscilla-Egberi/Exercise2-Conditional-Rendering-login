import React from "react";
import "../styles.css";
import Form from "./Form";

var userIsRegistered = false;
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
      </div>
    </div>
  );
}
//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
