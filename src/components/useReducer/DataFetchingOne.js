import React, { useState, useEffect } from "react";
import axios from "axios";

/*
 * Data fetching using the useState & useEffect method & set the loading, error & post according to the API response.
 */

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/50")
      .then((res) => {
        setLoading(false);
        setError("");
        setPost(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("Sorry 😐, something went wrong❗");
        setPost({});
      });
  }, []);
  
  return (
    <div>
      <h3>{loading ? "Loading..🗃" : post.title}</h3>
      <h3>{error ? error : null}</h3>
    </div>
  );
}

export default DataFetchingOne;
