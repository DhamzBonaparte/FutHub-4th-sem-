import "./PDash.css";
import Sidebar from "d:/FutHub/Frontend/src/Components/Sidebar/Sidebar.jsx";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function PDashboard() {
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

  return (
    <>
      <Sidebar></Sidebar>
      <div className="main-content">
        <div id="dashboard" className="dashboard-section">
          <div className="stats-container">
            <div className="stat-card">
                <div
                className="stat-icon"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                }}
              >
                <EventAvailableIcon className="bigIcon" />
              </div>
              <div className="stat-title">
                Upcoming Matches
              </div>
              <div className="stat-value">3</div>
            </div>

            <div className="stat-card">
              <div
                className="stat-icon"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                }}
              >
                <SportsSoccerIcon className="bigIcon" />
              </div>
              <div className="stat-title">Total Bookings</div>
              <div className="stat-value">15</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                }}>
                <FavoriteIcon className="bigIcon" />
              </div>
              <div className="stat-title">Favourite Venues</div>
              <div className="stat-value">4</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                }}>
                <DirectionsRunIcon className="bigIcon" />
              </div>
              <div className="stat-title">Matches Played</div>
              <div className="stat-value">12</div>
            </div>
          </div>

          <div className="section-header">
            <h2>Upcoming Bookings</h2>
          </div>

          <div className="upcoming-matches">
            <div className="match-card">
              <div className="match-date">
                <div className="day">28</div>
                <div className="month">OCT</div>
              </div>
              <div className="match-details">
                <h4>Kathmandu Futsal Arena</h4>
                <p>5-a-side, Artificial Turf</p>
              </div>
              <div className="match-time">
                <i className="far fa-clock"></i>
                <span>2:00 PM - 3:30 PM</span>
              </div>
              <div className="match-price">
                <i className="fas fa-tag"></i>
                <span>NPR 1,500</span>
              </div>
            </div>

            <div className="match-card">
              <div className="match-date">
                <div className="day">30</div>
                <div className="month">OCT</div>
              </div>
              <div className="match-details">
                <h4>Bhaktapur Sports Complex</h4>
                <p>7-a-side, Floodlights Available</p>
              </div>
              <div className="match-time">
                <i className="far fa-clock"></i>
                <span>5:00 PM - 6:30 PM</span>
              </div>
              <div className="match-price">
                <i className="fas fa-tag"></i>
                <span>NPR 2,000</span>
              </div>
            </div>
          </div>

          <div className="section-header">
            <h2>Booking History</h2>
            <a href="#" className="view-all">
              View All <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="booking-history">
            <table className="booking-table">
              <thead>
                <tr>
                  <th>Venue</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pokhara Arena</td>
                  <td>Oct 25, 2023</td>
                  <td>4:00 PM - 5:30 PM</td>
                  <td>NPR 1,800</td>
                  <td>
                    <span className="status completed">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>Chitwan Sports</td>
                  <td>Oct 22, 2023</td>
                  <td>6:00 PM - 7:30 PM</td>
                  <td>NPR 2,200</td>
                  <td>
                    <span className="status completed">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>Lalitpur Futsal</td>
                  <td>Oct 20, 2023</td>
                  <td>3:00 PM - 4:30 PM</td>
                  <td>NPR 1,600</td>
                  <td>
                    <span className="status cancelled">Cancelled</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section-header">
            <h2>Favourite Venues</h2>
          </div>

          <div className="favourite-venues">
            <div className="venue-grid">
              <div className="venue-card">
                <div
                  className="venue-image"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1518604666860-9ed391f76460?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60')",
                  }}
                ></div>
                <div className="venue-info">
                  <h4>Kathmandu Futsal Arena</h4>
                  <p>Thamel, Kathmandu • NPR 1,500/hr</p>
                </div>
              </div>

              <div className="venue-card">
                <div
                  className="venue-image"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60')",
                  }}
                ></div>
                <div className="venue-info">
                  <h4>Bhaktapur Sports Complex</h4>
                  <p>Bhaktapur • NPR 2,000/hr</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="opponents" className="opponents-section">
          <div className="section-tabs">
            <div className="tab active">Find Opponents</div>
            <div className="tab">Become an Opponent</div>
          </div>

          <div id="find-opponents" className="opponent-tab">
            <div className="search-container">
              <div className="location-search">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search location (e.g., Kathmandu, Bhaktapur)"
                  id="opponent-search"
                />
              </div>
              <button className="become-opponent-btn">
                Become an Opponent
              </button>
            </div>

            <div className="opponents-grid" id="opponents-grid"></div>
          </div>

          <div
            id="become-opponent"
            className="opponent-tab"
            style={{ display: "none" }}
          >
            <div className="form-container">
              <h3>Post as an Opponent</h3>
              <form id="opponent-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="opponent-name">Full Name</label>
                    <input type="text" id="opponent-name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="opponent-age">Age</label>
                    <input
                      type="number"
                      id="opponent-age"
                      min="16"
                      max="60"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="opponent-location">Location</label>
                    <select id="opponent-location" required>
                      <option value="">Select Location</option>
                      <option value="kathmandu">Kathmandu</option>
                      <option value="bhaktapur">Bhaktapur</option>
                      <option value="lalitpur">Lalitpur</option>
                      <option value="pokhara">Pokhara</option>
                      <option value="chitwan">Chitwan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="opponent-phone">Contact Number</label>
                    <input type="tel" id="opponent-phone" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="opponent-venue">Preferred Venue</label>
                    <input type="text" id="opponent-venue" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="opponent-time">Preferred Time</label>
                    <select id="opponent-time" required>
                      <option value="">Select Time Slot</option>
                      <option value="morning">Morning (6 AM - 12 PM)</option>
                      <option value="afternoon">
                        Afternoon (12 PM - 5 PM)
                      </option>
                      <option value="evening">Evening (5 PM - 9 PM)</option>
                      <option value="night">Night (9 PM - 11 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="opponent-skills">Skills Level</label>
                  <select id="opponent-skills" required>
                    <option value="">Select Skill Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>

                <button type="submit" className="submit-btn">
                  Post as Opponent
                </button>
              </form>
            </div>
          </div>
        </div>

        <div
          id="teammates"
          className="opponents-section"
          style={{ display: "none" }}
        >
          <div className="section-tabs">
            <div className="tab active">Find Teammates</div>
            <div className="tab">Become a Teammate</div>
          </div>

          <div id="find-teammates" className="teammate-tab">
            <div className="search-container">
              <div className="location-search">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search location (e.g., Chitwan, Pokhara)"
                  id="teammate-search"
                />
              </div>
              <button className="become-opponent-btn">Become a Teammate</button>
            </div>

            <div className="opponents-grid" id="teammates-grid"></div>
          </div>

          <div
            id="become-teammate"
            className="teammate-tab"
            style={{ display: "none" }}
          >
            <div className="form-container">
              <h3>Post as a Teammate</h3>
              <form id="teammate-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="teammate-name">Full Name</label>
                    <input type="text" id="teammate-name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="teammate-age">Age</label>
                    <input
                      type="number"
                      id="teammate-age"
                      min="16"
                      max="60"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="teammate-location">Location</label>
                    <select id="teammate-location" required>
                      <option value="">Select Location</option>
                      <option value="kathmandu">Kathmandu</option>
                      <option value="bhaktapur">Bhaktapur</option>
                      <option value="lalitpur">Lalitpur</option>
                      <option value="pokhara">Pokhara</option>
                      <option value="chitwan">Chitwan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="teammate-phone">Contact Number</label>
                    <input type="tel" id="teammate-phone" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="teammate-position">
                      Preferred Position
                    </label>
                    <select id="teammate-position" required>
                      <option value="">Select Position</option>
                      <option value="goalkeeper">Goalkeeper</option>
                      <option value="defender">Defender</option>
                      <option value="midfielder">Midfielder</option>
                      <option value="forward">Forward</option>
                      <option value="any">Any Position</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="teammate-experience">
                      Years of Experience
                    </label>
                    <select id="teammate-experience" required>
                      <option value="">Select Experience</option>
                      <option value="0-1">0-1 Years</option>
                      <option value="1-3">1-3 Years</option>
                      <option value="3-5">3-5 Years</option>
                      <option value="5+">5+ Years</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="teammate-availability">Availability</label>
                  <select id="teammate-availability" required>
                    <option value="">Select Availability</option>
                    <option value="weekdays">Weekdays Only</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="both">Both Weekdays & Weekends</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="teammate-about">
                    About You (Skills, Preferences)
                  </label>
                  <textarea
                    id="teammate-about"
                    rows="3"
                    style={{
                      width: "100%",
                      padding: "0.8rem",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Post as Teammate
                </button>
              </form>
            </div>
          </div>
        </div>

        <div
          id="bookings"
          className="booking-history"
          style={{ display: "none" }}
        >
          <div className="section-header">
            <h2>All Bookings</h2>
          </div>
          <table className="booking-table">
            <thead>
              <tr>
                <th>Venue</th>
                <th>Date</th>
                <th>Time</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <div
          id="favourites"
          className="favourite-venues"
          style={{ display: "none" }}
        >
          <div className="section-header">
            <h2>My Favourite Venues</h2>
          </div>
          <div className="venue-grid"></div>
        </div>
      </div>
    </>
  );
}
