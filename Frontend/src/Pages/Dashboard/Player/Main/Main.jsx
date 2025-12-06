import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { useOutletContext } from "react-router-dom";

export default function Main(){
    const{error,fav,data}=useOutletContext();
    return(
        <>
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
              <div className="stat-title">Upcoming Matches</div>
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
              <div
                className="stat-icon"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                }}
              >
                <FavoriteIcon className="bigIcon" />
              </div>
              <div className="stat-title">Favourite Venues</div>
              <div className="stat-value">4</div>
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

          <div className="favourite-venues" ref={fav}>
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
        </>
    )
}