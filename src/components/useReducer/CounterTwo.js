import React, { useReducer } from "react";

/*
 * useReducer with complex state & action.
 */

const initialState = { firstCounter: 0, secondCounter: 10 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return {...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return {...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return {...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First Counter : {count.firstCounter}</div>
      <div>Second Counter : {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <div>
      <button onClick={() => dispatch({ type: "increment2", value: 10 })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 10 })}>
        Decrement 2
      </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
