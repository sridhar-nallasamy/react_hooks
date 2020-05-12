import React, { useEffect, useRef } from "react";

/*
* to focus on input field of the page after loadup using useRef.
*/

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FocusInput;
