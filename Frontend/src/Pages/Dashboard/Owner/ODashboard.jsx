import OSidebar from "../../../Components/Sidebar/OSidebar";
import { Outlet } from "react-router-dom";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ODashboard() {
  const [error, setError] = useState("");
  const navigate=useNavigate();

  useEffect(()=>{
    validate();
  },[])

  const validate = async () => {
    try {
      await axios.get("http://localhost:3000/api/v1/owner", {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 401) {
        setError(error.message);
        alert("You must Login to view dashboard!");

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error.response?.status === 403) {
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
      <OSidebar />
      <div
        className="main-content"
        style={error ? { filter: "blur(10px)" } : { filter: "blur(0px)" }}
      >
        <Outlet context={{ error }} />
      </div>
      <h1>Owner</h1>
    </>
  );
}
