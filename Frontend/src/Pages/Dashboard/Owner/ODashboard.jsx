import OSidebar from "../../../Components/Sidebar/OSidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function ODashboard() {
  const [error, setError] = useState("");
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
