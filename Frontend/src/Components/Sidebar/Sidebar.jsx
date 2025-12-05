import "./sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from '@mui/icons-material/Book';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupsIcon from '@mui/icons-material/Groups';

export default function Sidebar() {
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
          <div className="user-avatar">S</div>
          <div className="user-info">
            <h3>Sulav Dhami</h3>
            <p>Player</p>
          </div>
        </div>

        <ul className="nav-menu">
          <li>
            <a href="#" className="active" >
              <DashboardIcon className="icon"/>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a>
              <BookIcon className="icon"/>
              <span>Booking</span>
            </a>
          </li>
          <li>
            <a>
              <FavoriteIcon className="icon"/>
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a>
              <PersonAddIcon className="icon"/>
              <span>Opponents</span>
            </a>
          </li>
          <li>
            <a>
              <GroupsIcon className="icon"/>
              <span>Teammates</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
