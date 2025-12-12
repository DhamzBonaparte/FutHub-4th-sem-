import "./PDash.css";
import Sidebar from "d:/FutHub/Frontend/src/Components/Sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PDashboard() {
  const fav = useRef("null");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  function goToFav() {
    fav.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Sidebar goToFav={goToFav}></Sidebar>
      <div className="main-content">
        <Outlet context={{ fav }} />
      </div>
    </>
  );
}
