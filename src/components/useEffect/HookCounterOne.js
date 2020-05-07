import React, { useState, useEffect } from "react";

/*
* useEffect to run after 1st render & every update.
* useEffect's second parameter where the effect apply. ie., dependencieds list.
*/

function HookCounterOne() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect - updating doc title')
    document.title = `Clicked ${count} times`
  }, [count])

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;
