import React, { useState, useEffect } from "react";
import axios from "axios";

/*
* Data fetching from the API using the useEffect method.
*/

function DataFetching() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1)
  const [idFromButton, setIdFromButton] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => {
        console.log(res);
        setPost(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButton]);

  const handleClick = () => {
      setIdFromButton(id)
  }

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button type="button" onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
