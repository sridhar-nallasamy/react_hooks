import React, { useState, useEffect } from "react";

/*
 * Hook to automatically increment count by every second.
 */
function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
}

export default IntervalHookCounter;
