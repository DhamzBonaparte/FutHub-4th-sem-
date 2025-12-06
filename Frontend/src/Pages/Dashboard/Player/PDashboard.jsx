import "./PDash.css";
import Sidebar from "d:/FutHub/Frontend/src/Components/Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import Main from "./Main/Main";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PDashboard() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const fav = useRef("null");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    getAllData();
  }, []);

  function goToFav() {
    fav.current.scrollIntoView({ behavior: "smooth" });
  }

  const getAllData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/player", {
        withCredentials: true,
      });
      setData(res.data.msg);
    } catch (err) {
      if (err.response?.status === 401) {
        setError("You must Login to view dashboard!");
        alert("You must Login to view dashboard!");

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (err.response?.status === 403) {
        setError("Session expired. Please login again.");
        alert("Session expired. Please login again.");

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        setError("Something went wrong. Please try again");
      }
    }
  };

  return (
    <>
      <div className="error">
        <h3
          style={{
            textAlign: "center",
            padding: "10px",
            display: error ? "block" : "none",
          }}
        >
          {error}
        </h3>
      </div>
      <Sidebar goToFav={goToFav}></Sidebar>
      <div
        className="main-content"
        style={error ? { filter: "blur(10px)" } : { filter: "blur(0px)" }}
      >
        <Outlet context={{ error, fav, data }} />
      </div>
    </>
  );
}
