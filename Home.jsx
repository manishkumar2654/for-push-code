import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "./image/imga.jpg";
import "./css/Home.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

     

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const ans = data.map((post) => (
    <li key={post.id}>
      <div className="text" key={post.id}>
        <h2>{post.title}</h2>

        <p>{post.body}</p>
      </div>

      <div className="img">
        <img src={image} />
      </div>
    </li>
  ));

  return (
    <div className="home-main">
      <div className="home-main-two">
        <div className="home-two">{ans}</div>
      </div>
    </div>
    
  );
}
export default App;

