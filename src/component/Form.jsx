import React from "react";

function Form() {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit" className="mb-2">
        Register
      </button>
      <button type="submit">login</button>
    </form>
  );
}

export default Form;
