export default function Teammate() {
  const LocationPinIcon = () => "Location";
  const SportsSoccerIcon = () => "Soccer";
  const CalendarTodayIcon = () => "Calendar";
  const AccessTimeIcon = () => "Time";
  const PhoneIcon = () => "Phone";
  const MilitaryTechIcon = () => "Trophy";
  const WcIcon = () => "Gender";
  const PersonIcon = () => "Person";
  return (
    <>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          background: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        {/* Edit Modal Overlay */}
        <div
          style={{
            position: "fixed",
            
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            zIndex: 1000,
            padding: "60px 20px 20px",
            overflowY: "auto",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              background: "#fff",
              display:"none",
              width: "100%",
              maxWidth: "600px",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            <p
              style={{
                margin: "0 0 20px 0",
                textAlign: "center",
                fontSize: "28px",
                fontWeight: "700",
                color: "#0d1b2a",
                letterSpacing: "1px",
                paddingBottom: "10px",
                borderBottom: "3px solid #5efc82",
                
              }}
            >
              Edit Opponent Posting
            </p>

            <form>
              <label>Team Name:</label>
              <input
                type="text"
                placeholder="Enter Team Name"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />

              <label>Location:</label>
              <select
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              >
                <option>Select Location</option>
                <option>Kathmandu</option>
                <option>Bhaktapur</option>
                <option>Lalitpur</option>
              </select>

              <label>Average Age:</label>
              <input
                type="number"
                placeholder="Enter average age"
                min="12"
                max="65"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />

              <label>Contact:</label>
              <input
                type="tel"
                placeholder="Enter contact number"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />

              <label>Venue:</label>
              <input
                type="text"
                placeholder="Enter venue"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />

              <label>Gender:</label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginBottom: "15px",
                }}
              >
                <div>
                  <input type="radio" id="male" name="gender" />{" "}
                  <label htmlFor="male" style={{ marginLeft: "5px" }}>
                    Male
                  </label>
                </div>
                <div>
                  <input type="radio" id="female" name="gender" />{" "}
                  <label htmlFor="female" style={{ marginLeft: "5px" }}>
                    Female
                  </label>
                </div>
                <div>
                  <input type="radio" id="other" name="gender" />{" "}
                  <label htmlFor="other" style={{ marginLeft: "5px" }}>
                    Other
                  </label>
                </div>
              </div>

              <label>Match Date:</label>
              <input
                type="date"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />

              <label>Level:</label>
              <select
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              >
                <option>Select Skill Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>Professional</option>
              </select>

              <label>Time From:</label>
              <input
                type="time"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />

              <label>Time To:</label>
              <input
                type="time"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "20px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />

              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  style={{
                    background: "#0d1b2a",
                    color: "#5efc82",
                    padding: "12px 24px",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  Save
                </button>
                <button
                  type="button"
                  style={{
                    background: "#e63946",
                    color: "#fff",
                    padding: "12px 24px",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: "bold",
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Main Content with Blur */}
        <div style={{ padding: "20px" }}>
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              background: "#fff",
              marginBottom: "20px",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                flex: 1,
                padding: "15px",
                textAlign: "center",
                background: "#e8f5e9",
                color: "#009624",
                fontWeight: "bold",
                borderBottom: "4px solid #00c853",
              }}
            >
              Find Opponents
            </div>
            <div
              style={{
                flex: 1,
                padding: "15px",
                textAlign: "center",
                background: "#fff",
                color: "#333",
              }}
            >
              Become an Opponent
            </div>
            <div
              style={{
                flex: 1,
                padding: "15px",
                textAlign: "center",
                background: "#fff",
                color: "#333",
              }}
            >
              My Postings
            </div>
          </div>

          {/* Find Opponents Tab */}
          <div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "30px",
                maxWidth: "700px",
              }}
            >
              <input
                type="text"
                placeholder="Search location..."
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                style={{
                  background: "#0d1b2a",
                  color: "#5efc82",
                  padding: "12px 30px",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                Search
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    background: "#0d1b2a",
                    color: "#5efc82",
                    padding: "15px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Thunder Strikers</span>
                  <span>24 yrs</span>
                </div>
                <div style={{ padding: "15px" }}>
                  <p>
                    <strong>Location:</strong> Kathmandu
                  </p>
                  <p>
                    <strong>Venue:</strong> Dasharath Stadium
                  </p>
                  <p>
                    <strong>Date:</strong> 2025-12-20
                  </p>
                  <p>
                    <strong>Time:</strong> 02:00 PM - 04:00 PM
                  </p>
                  <p>
                    <strong>Contact:</strong> 9801234567
                  </p>
                  <p>
                    <strong>Level:</strong> Intermediate
                  </p>
                </div>
                <div style={{ padding: "0 15px 15px" }}>
                  <button
                    style={{
                      width: "100%",
                      background: "#0d1b2a",
                      color: "#5efc82",
                      padding: "12px",
                      border: "none",
                      borderRadius: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    Confirm as Opponent
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Become an Opponent Form (Hidden in this static view, but structure kept) */}
          <div style={{ display: "none" }}>
            <h2 style={{ textAlign: "center", color: "#0d1b2a" }}>
              Post Your Team
            </h2>
            <form style={{ maxWidth: "800px", margin: "0 auto" }}>
              {/* Form fields similar to edit modal */}
            </form>
          </div>

          {/* My Postings */}
          <div style={{ marginTop: "50px" }}>
            <h2
              style={{
                textAlign: "center",
                color: "#0d1b2a",
                marginBottom: "30px",
              }}
            >
              My Opponent Postings
            </h2>
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0.1)",
              }}
            >
              <h3>Phoenix FC • 26 yrs avg</h3>
              <p>
                <strong>Location:</strong> Lalitpur | <strong>Venue:</strong>{" "}
                ANFA Complex | <strong>Date:</strong> 2025-12-25
              </p>
              <p>
                <strong>Time:</strong> 04:00 PM - 06:00 PM |{" "}
                <strong>Level:</strong> Advanced | <strong>Gender:</strong> Male
              </p>
              <div style={{ margin: "15px 0" }}>
                <strong>Players:</strong>
                <ul>
                  <li>Ram Bahadur – 28 yrs</li>
                  <li>Sita Sharma – 25 yrs</li>
                  <li>Hari Thapa – 30 yrs</li>
                </ul>
              </div>
              <div style={{ textAlign: "right" }}>
                <button
                  style={{
                    background: "#1d3557",
                    color: "white",
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "6px",
                    marginRight: "10px",
                  }}
                >
                  Edit
                </button>
                <button
                  style={{
                    background: "#e63946",
                    color: "white",
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "6px",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
