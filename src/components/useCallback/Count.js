import React from "react";

/*
* using React.memo() to avoid unwanted re-rendering.
*/

function Count({ text, count }) {
  console.log(`Rendering ${text}.`);
  return (
    <div>
      <h2>
        {text} - {count}
      </h2>
    </div>
  );
}

export default React.memo(Count);
