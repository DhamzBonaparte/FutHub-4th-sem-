import './sidebar.css'

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="logo2">
          <i className="fas fa-futbol"></i>
          <h1>FutHub</h1>
        </div>

        <div className="user-profile">
          <div className="user-avatar">R</div>
          <div className="user-info">
            <h3>Rohan Sharma</h3>
            <p>Player</p>
          </div>
        </div>

        <ul className="nav-menu">
          <li>
            <a href="#" className="active">
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-calendar-alt"></i>
              <span>Booking</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-heart"></i>
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-users"></i>
              <span>Opponents</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-user-friends"></i>
              <span>Teammates</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
