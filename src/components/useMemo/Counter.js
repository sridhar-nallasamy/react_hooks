import React, { useState, useMemo } from "react";

/*
* useMemo method to optimize the function & to avoid the unwanted re-rendering.
* if you need to cash the result of an invoke fucion then use 'useMemo'.
*/

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEvent = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne])

  return (
    <div>
      <div>
        <button onClick={incrementCounterOne}>Count One - {counterOne}</button>
        <span>{isEvent ? "Event ✌🏻" : "Odd 🤞🏻"}</span>
      </div>
      <div>
        <button onClick={incrementCounterTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
