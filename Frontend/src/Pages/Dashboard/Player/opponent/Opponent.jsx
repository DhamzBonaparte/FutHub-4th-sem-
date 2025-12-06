import "../PDash.css";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Opponent() {
  const [beOpponent, setBeOpponent] = useState(false);
  return (
    <>
      <div id="opponents" className="opponents-section">
        <div className="section-tabs">
          <div
            className="tab active"
            style={
              !beOpponent
                ? { borderBottom: "3px solid #00c853", color: "#009624" }
                : { borderBottom: "0px", color: "black" }
            }
            onClick={() => setBeOpponent(false)}
          >
            Find Opponents
          </div>
          <div
            className="tab"
            style={
              beOpponent
                ? { borderBottom: "3px solid #00c853", color: "#009624" }
                : { borderBottom: "0px", color: "black" }
            }
            onClick={() => setBeOpponent(true)}
          >
            Become an Opponent
          </div>
        </div>

        <div
          id="find-opponents"
          className="opponent-tab"
          style={!beOpponent ? { display: "block" } : { display: "none" }}
        >
          <div className="search-container">
            <div className="location-search">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search location (e.g., Kathmandu, Bhaktapur)"
                id="opponent-search"
              />
            </div>
            <button
              className="become-opponent-btn"
              style={{ background: "#0d1b2a", color: "#5efc82" }}
            >
              Search Opponent
            </button>
          </div>

          <div className="opponents-grid" id="opponents-grid">
            {/* put the available opponents in the area  */}
          </div>
        </div>

        <div
          id="become-opponent"
          className="opponent-tab"
          style={beOpponent ? { display: "block" } : { display: "none" }}
        >
          <div className="form-container">
            <h3>Post your team as an Opponent</h3>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  background: "#9aa0a6",
                  color: "#fff",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 700,
                  lineHeight: 1,
                  cursor: "default",
                  userSelect: "none",
                  margin: "10px 10px 10px 0px",
                }}
                aria-label="Information"
              >
                i
              </div>
              <span style={{ fontSize: "12px", color: "#333" }}>
                Make sure that you have a team of 5 or more to post your team as
                an opponent.
              </span>
            </div>
            <form id="opponent-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="opponent-name">Team Name</label>
                  <input type="text" id="opponent-name" required placeholder="Enter Team Name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="opponent-age">Total Players</label>
                  <input
                    type="number"
                    id="opponent-age"
                    min="5"
                    max="20"
                    placeholder="Enter total number of players"
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
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="opponent-phone">Contact Number</label>
                  <input
                    type="tel"
                    id="opponent-phone"
                    required
                    minlength="10"
                    maxlength="10"
                    pattern="[0-9]{10}"
                    placeholder="Enter contact number"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="opponent-venue">Venue</label>
                  <input type="text" id="opponent-venue" required placeholder="Enter venue" />
                </div>

                <div className="form-group">
                  <label htmlFor="opponent-time">Preferred Time</label>
                  <select id="opponent-time" required>
                    <option value="">Select Time Slot</option>
                    <option value="morning">Morning (6 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 9 PM)</option>
                    <option value="night">Night (9 PM - 11 PM)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="user-date">Select Date</label>
                  <input
                    type="date"
                    id="user-date"
                    name="user-date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    style={{
                      padding: "6px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "14px",
                      height: "57%",
                    }}
                  />
                </div>
              </div>

              <div className="form-row">
                <div>
                  <h3 style={{ color:"#009624",marginBottom:"20px" }}>Player Details</h3>
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "8px",
                        gap: "10px",
                      }}
                    >
                      <label
                        htmlFor={`player-${index + 1}`}
                        style={{
                          width: "100px",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        Player {index + 1}
                      </label>
                      <input
                        type="text"
                        id={`player-${index + 1}`}
                        name={`player-${index + 1}`}
                        required
                        placeholder="Enter name"
                        style={{
                          flex: 1,
                          padding: "6px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                  ))}
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

              <button type="submit" className="submit-btn" style={{ background: "#0d1b2a", color: "#5efc82" }}>
                Post as Opponent
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
