import React from "react";
import useInput from "./hooks/useInput";

/*
* using the custom hook instead of useState & binding the value inside the input tag and resetting them inside the submit handler.
*/

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello, ${firstName} ${lastName} 😊`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name: </label>
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" {...bindLastName} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
