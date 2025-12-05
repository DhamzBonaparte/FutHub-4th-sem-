import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const navigate=useNavigate();

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/player", {
        withCredentials: true,
      });
      setData(res.data.msg);
    } catch (err) {
      if (err.response?.status === 401) {
        setError("You must Login to view this page!");
        navigate('/login')
      } else if (err.response?.status === 403) {
        setError("Session expired. Please login again.");
        navigate('/login');
      } else {
        setError("Something went wrong. Please try again");
      }
    }
  };

  console.log(data);
  return (
    <>
      <div className="sidebar">
        <div className="logo2">
          Fut{" "}
          <span style={{ color: "lightgreen", margin: "0", padding: "0" }}>
            Hub
          </span>
        </div>

        <div className="user-profile">
          <div className="user-avatar">
            {data?.firstName?.slice(0, 1) || ""}
          </div>
          <div className="user-info">
            <h3>
              {data.firstName || ""} {data.lastName || ""}
            </h3>
            <p>
              {data?.role?.charAt(0).toUpperCase() || ""}
              {data?.role?.slice(1) || ""}
            </p>
          </div>
        </div>

        <ul className="nav-menu">
          <li>
            <a href="#" className="active">
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a>
              <BookIcon className="icon" />
              <span>Booking</span>
            </a>
          </li>
          <li>
            <a>
              <FavoriteIcon className="icon" />
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a>
              <PersonAddIcon className="icon" />
              <span>Opponents</span>
            </a>
          </li>
          <li>
            <a>
              <GroupsIcon className="icon" />
              <span>Teammates</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
