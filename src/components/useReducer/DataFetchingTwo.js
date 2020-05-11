import React, { useReducer, useEffect } from "react";
import axios from "axios";

/*
 * Data fetching using the 'useReducer & useEffect' method & set the loading, error & post according to the API response.
 */

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, error: "", post: action.payload };
    case "FETCH_FAILURE":
      return {
        loading: false,
        error: "Sorry 😐, something went wrong❗",
        post: {},
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/10")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILURE" });
      });
  }, []);

  return <div>
      <h2>{state.loading ? "Loading..🗃" : state.post.title}</h2>
      <h2>{state.error ? state.error : null}</h2>
  </div>;
}

export default DataFetchingTwo;
