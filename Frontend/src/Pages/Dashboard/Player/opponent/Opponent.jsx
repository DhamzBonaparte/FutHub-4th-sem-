import "../PDash.css";
import { useState, useEffect } from "react";
import axios from "axios";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function Opponent() {
  const [beOpponent, setBeOpponent] = useState(false);
  const [totalPlayers, setTotalPlayers] = useState(5);
  const [error, setError] = useState("");
  const [playerNames, setPlayerNames] = useState(Array(5).fill(""));
  const [teamName, setTeamName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [venue, setVenue] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [level, setLevel] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [averageAge, setAverageAge] = useState("");
  const [opponents, setOpponents] = useState({});
  const [curr, setCurr] = useState("");
  const [length, setLength] = useState(0);

  useEffect(() => {
    getOpponents();
  }, [length]);

  async function getOpponents() {
    try {
      const oppo = await axios.get(
        "http://localhost:3000/api/v1/player/find-opponent"
      );
      setOpponents(oppo.data);
      setLength(opponents.length);
    } catch (error) {
      setError(error.message);
    }
  }

  console.log(opponents.data);

  function handleNames(index, name) {
    const updatedNames = [...playerNames];
    updatedNames[index] = name;
    setPlayerNames(updatedNames);
  }

  async function handleSubmit() {
    try {
      const upl = axios.post(
        "http://localhost:3000/api/v1/player/find-opponent",
        {
          teamName,
          totalPlayers,
          location,
          averageAge,
          contact,
          venue,
          gender,
          date,
          playerNames,
          level,
          timeFrom,
          timeTo,
        }
      );
      console.log(upl);
    } catch (error) {
      setError(error);
    }
  }

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
            {opponents?.data?.map((opp, index) => {
              return (
                <div className="opponent-card" key={index}>
                  <div className="opponent-header" key={index}>
                    <div className="opponent-name">{opp.teamName}</div>
                    <div className="opponent-age">{opp.averageAge} years</div>
                  </div>
                  <div className="opponent-details">
                    <p>
                      <LocationPinIcon
                        height="20"
                        style={{ color: "black", marginRight: "10px" }}
                      />{" "}
                      {opp.location.slice(0, 1).toUpperCase() +
                        opp.location.slice(1)}
                    </p>
                    <p>
                      <SportsSoccerIcon
                        height="20"
                        style={{ color: "black", marginRight: "10px" }}
                      />{" "}
                      {opp.venue.slice(0, 1).toUpperCase() + opp.venue.slice(1)}
                    </p>
                    <p>
                      <CalendarTodayIcon
                        height="20"
                        style={{ color: "black", marginRight: "10px" }}
                      />{" "}
                      {opp.matchDate.slice(0, 10)}
                    </p>
                    <p>
                      <AccessTimeIcon
                        height="20"
                        style={{ color: "black", marginRight: "10px" }}
                      />{" "}
                      {new Date(
                        `1970-01-01T${opp.timeFrom}:00`
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                      {" "}-{" "}
                      {new Date(
                        `1970-01-01T${opp.timeTo}:00`
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                    <p>
                      <PhoneIcon
                        height="20"
                        style={{ color: "black", marginRight: "10px" }}
                      />{" "}
                      {opp.contact}
                    </p>
                    <p>
                      <MilitaryTechIcon
                        height="20"
                        style={{ color: "black", marginRight: "10px" }}
                      />
                      {opp.level.slice(0,1).toUpperCase() + opp.level.slice(1) + " " +"level"}
                    </p>
                  </div>
                  <button
                    className="confirm-btn"
                    style={{ background: "#0d1b2a", color: "#5efc82" }}
                  >
                    Confirm as Opponent
                  </button>
                </div>
              );
            })}
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
                    onChange={(e) => setTeamName(e.target.value)}
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
                  <select
                    id="opponent-location"
                    required
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="">Select Location</option>
                    <option value="kathmandu">Kathmandu</option>
                    <option value="bhaktapur">Bhaktapur</option>
                    <option value="lalitpur">Lalitpur</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="average-age">Average Age</label>
                  <input
                    type="number"
                    id="average-age"
                    name="average-age"
                    required
                    placeholder="Enter average age"
                    value={averageAge}
                    onChange={(e) => setAverageAge(e.target.value)}
                    style={{
                      width: "100%",
                      height: "50px",
                      padding: "6px",
                      borderRadius: "4px",
                      fontSize: "14px",
                    }}
                  />
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
                    onChange={(e) => setContact(e.target.value)}
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
                    onChange={(e) => setVenue(e.target.value)}
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
                        onChange={(e) => setGender(e.target.value)}
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
                        onChange={(e) => setGender(e.target.value)}
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
                        onChange={(e) => setGender(e.target.value)}
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
                    onChange={(e) => setDate(e.target.value)}
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
                        onChange={(e) => handleNames(index, e.target.value)}
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
                  <select
                    id="opponent-skills"
                    required
                    onChange={(e) => setLevel(e.target.value)}
                  >
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
                      onChange={(e) => setTimeFrom(e.target.value)}
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
                      onChange={(e) => setTimeTo(e.target.value)}
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
                onClick={() => handleSubmit()}
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
