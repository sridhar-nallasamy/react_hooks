import React, { useState } from "react";
import useDocTitle from "./hooks/useDocTitle";

/*
* using the custom hook 'useDocTitle' insted of using individual useEffect.
*/

function DocTitleOne() {
  const [count, setCount] = useState(0);

  useDocTitle(count)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}.</button>
    </div>
  );
}

export default DocTitleOne;