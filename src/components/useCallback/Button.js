import React from "react";

/*
* using React.memo() to avoid unwanted re-rendering.
*/

function Button({ handleClick, children }) {
  console.log("Rendering button - ", children);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default React.memo(Button);
