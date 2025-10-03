import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackendURL from "../config/backendURL";


import "../css/home.css"; // create a css file for styling

const Home = () => {
  const navigate = useNavigate();
  const [myData, setMyData] = useState([]);

  const handleSubmit = (id) => {
    navigate(`/showdetails/${id}`);
  };

  const loadData = async () => {
    try {
      let api = `${BackendURL}/user/home`;
      const res = await axios.get(api);
      setMyData(res.data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <section className="home-container">
      {myData.map((item) => (
        <div className="card" key={item._id}>
          <img
            src={item.imgUrl }
            alt={item.name}
            className="card-img"
          />
          <div className="card-body">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-text">
              <strong>Location:</strong> {item.location} <br />
              <strong>Timings:</strong> {item.time}
            </p>
            <button
              className="book-btn"
              onClick={() => handleSubmit(item._id)}
            >
              Book Show
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Home;
