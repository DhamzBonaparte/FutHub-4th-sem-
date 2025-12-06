import "../PDash.css";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Opponent() {
  const [beOpponent, setBeOpponent] = useState(false);
  const [totalPlayers, setTotalPlayers] = useState(5);
  const [custom, setCustom] = useState("");

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
                  <input
                    type="text"
                    id="opponent-name"
                    required
                    placeholder="Enter Team Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="opponent-playrs">Total Players</label>
                  <input
                    type="number"
                    id="opponent-players"
                    min="5"
                    max="15"
                    placeholder="Enter total number of players"
                    required
                    onChange={(e) => setTotalPlayers(Number(e.target.value))}
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
                    minLength="10"
                    maxLength="10"
                    pattern="[0-9]{10}"
                    placeholder="Enter contact number"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="opponent-venue">Venue</label>
                  <input
                    type="text"
                    id="opponent-venue"
                    required
                    placeholder="Enter venue"
                  />
                </div>

                <div
                  className="form-group"
                  style={{
                    textAlign: "Center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <label htmlFor="gender">Gender</label>
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      marginTop: "10px",
                    }}
                  >
                    <div>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        required
                      />
                      <label htmlFor="male" style={{ marginLeft: "5px" }}>
                        Male
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        required
                      />
                      <label htmlFor="female" style={{ marginLeft: "5px" }}>
                        Female
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        required
                      />
                      <label htmlFor="other" style={{ marginLeft: "5px" }}>
                        Other
                      </label>
                    </div>
                  </div>
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
                      height: "48px",
                    }}
                  />
                </div>
              </div>

              <div className="form-row">
                <div>
                  <h3 style={{ color: "#009624", marginBottom: "20px" }}>
                    Player Details
                  </h3>
                  {[...Array(totalPlayers)].map((_, index) => (
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

              <div className="form-row">
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

                <div className="form-group">
                  <label htmlFor="opponent-time">Preferred Time</label>
                  <div
                    className="from"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <label
                      htmlFor="from"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      From
                    </label>
                    <input
                      type="time"
                      name="from"
                      required
                      style={{
                        marginTop: "10px",
                        padding: "6px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        padding: "10px",
                      }}
                    />
                  </div>

                  <div
                    className="to"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <label
                      htmlFor="to"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        marginTop: "10px",
                        marginRight: "10px",
                        marginLeft: "10px",
                      }}
                    >
                      To
                    </label>
                    <input
                      type="time"
                      name="to"
                      required
                      style={{
                        marginTop: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        width: "100%",
                        padding: "10px",
                      }}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="submit-btn"
                style={{ background: "#0d1b2a", color: "#5efc82" }}
              >
                Post as Opponent
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
