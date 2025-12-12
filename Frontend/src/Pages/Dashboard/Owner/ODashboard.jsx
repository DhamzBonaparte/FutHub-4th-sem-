import OSidebar from "../../../Components/Sidebar/OSidebar";
import { Outlet } from "react-router-dom";

export default function ODashboard() {
  return (
    <>
      <OSidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
}
