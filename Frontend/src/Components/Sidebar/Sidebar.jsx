import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BookIcon from "@mui/icons-material/Book";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Sidebar({ goToFav }) {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [active, setActive] = useState("");
  const navigate = useNavigate();

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
        navigate("/login");
      } else if (err.response?.status === 403) {
        setError("Session expired. Please login again.");
        navigate("/login");
      } else {
        setError("Something went wrong. Please try again");
      }
    }
  };

  return (
    <>
      <div
        className="sidebar"
        style={error ? { filter: "blur(10px)" } : { filter: "blur(0px)" }}
      >
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
            <Link
              to="/player"
              className={active == "dashboard" ? "active" : ""}
              onClick={() => setActive("dashboard")}
            >
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <a
              className={active == "book" ? "active" : ""}
              onClick={() => setActive("book")}
            >
              <BookIcon className="icon" />
              <span>Booking</span>
            </a>
          </li>
          <li>
            <Link
              to="/player"
              onClick={() => {
                goToFav();
                setActive("fav");
              }}
              className={active == "fav" ? "active" : ""}
            >
              <FavoriteIcon className="icon" />
              <span>Favourites</span>
            </Link>
          </li>
          <li>
            <Link
              to="/player/find-opponent"
              className={active == "opponent" ? "active" : ""}
              onClick={() => setActive("opponent")}
            >
              <PersonAddIcon className="icon" />
              <span>Opponents</span>
            </Link>
          </li>
          <li>
            <Link
              to="find-teammates"
              className={active == "team" ? "active" : ""}
              onClick={() => setActive("team")}
            >
              <GroupsIcon className="icon" />
              <span>Teammates</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
