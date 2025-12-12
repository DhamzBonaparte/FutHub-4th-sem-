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
import LogoutIcon from "@mui/icons-material/Logout";

export default function OSidebar({ goToFav }) {

  return (
    <>
      <div
        className="sidebar"
        // style={error ? { filter: "blur(10px)" } : { filter: "blur(0px)" }}
      >
        <div className="logo2">
          Fut{" "}
          <span 
        //   style={{ color: "lightgreen", margin: "0", padding: "0" }}
          >
            Hub
          </span>
        </div>

        <div className="user-profile">
          <div className="user-avatar">
            {/* {data?.firstName?.slice(0, 1) || ""} */}
          </div>
          <div className="user-info">
            <h3>
              {/* {data.firstName || ""} {data.lastName || ""} */}
            </h3>
            <p>
              {/* {data?.role?.charAt(0).toUpperCase() || ""}
              {data?.role?.slice(1) || ""} */}
            </p>
          </div>
        </div>

        <ul className="nav-menu">
          <li>
            <Link
                to="/owner"
            //   className={active == "dashboard" ? "active" : ""}
            //   onClick={() => setActive("dashboard")}
            >
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
            to="/owner/my-futsal"
            //   className={active == "book" ? "active" : ""}
            //   onClick={() => setActive("book")}
            >
              <BookIcon className="icon" />
              <span>My Futsal</span>
            </Link>
          </li>
          <li>
            <Link
            to="/owner/book-futsal"
            //   className={active == "opponent" ? "active" : ""}
            //   onClick={() => setActive("opponent")}
            >
              <PersonAddIcon className="icon" />
              <span>Bookings</span>
            </Link>
          </li>
          <li>
            <Link
            to="/owner/review"
            //   className={active == "team" ? "active" : ""}
            //   onClick={() => setActive("team")}
            >
              <GroupsIcon className="icon" />
              <span>Reviews</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
            //   className={active == "logout" ? "active" : ""}
            //   onClick={() => {
            //     setActive("logout");
            //     Logout()}}
            >
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
