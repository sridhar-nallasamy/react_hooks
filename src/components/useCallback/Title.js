import React from "react";

/*
* using React.memo() to avoid unwanted re-rendering.
*/

function Title() {
  console.log("Rendering Title.");
  return (
    <div>
      <h3>useCallback Hook.</h3>
    </div>
  );
}

export default React.memo(Title);
