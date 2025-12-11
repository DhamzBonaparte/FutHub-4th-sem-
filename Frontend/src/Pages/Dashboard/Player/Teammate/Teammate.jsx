import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Teammate() {
  const [find, setFind] = useState(true);
  const [become, setBecome] = useState(false);
  const [myPosting, setMyPosting] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("");
  const [available, setAvailable] = useState("");
  const [about, setAbout] = useState("");
  const [data, setData] = useState([]);
  const [length, setLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [register, setRegistered] = useState(false);


  useEffect(()=>{
    checkTeammate();
  },[])

  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    getTeams();
  }, [length]);

  const checkTeammate = async () => {
    try {
      const check=await axios.get("http://localhost:3000/api/v1/player/check-teammate", {
        withCredentials: true,
      });
      console.log(check);
      setRegistered(check.data.registered)
    } catch (error) {
      setError(error.message);
    }
  };

  const setActiveTab = (activeTab) => {
    setFind(activeTab === "find");
    setBecome(activeTab === "become");
    setMyPosting(activeTab === "myPosting");
  };

  const contentDisplay = (isActive) => ({
    display: isActive ? "block" : "none",
  });

  const handleSearch = async (e) => {
    setLoading(true);
    try {
      const se = await axios.post(
        "http://localhost:3000/api/v1/player/search-teammate",
        { search },
        { withCredentials: true }
      );
      setData(se.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const getMyTeammateListings = async () => {};

  const getTeams = async () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setLoading(true);
    try {
      const teams = await axios.get(
        "http://localhost:3000/api/v1/player/find-teammate",
        { withCredentials: true }
      );
      setData(teams.data.data);
      setLength(teams.data.length);
      checkTeammate();
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/player/find-teammate",
        {
          name,
          age,
          location,
          contact,
          position,
          experience,
          gender,
          available,
          about,
        },
        { withCredentials: true }
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
    setActiveTab("find");
    getTeams();
  };
  return (
    <>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          background: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        {isEdit && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
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
                  display: "block",
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
                    onClick={() => setIsEdit(false)} // Added close functionality
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
        )}

        {/* Main Content */}
        <div style={{ padding: "20px" }}>
          {/* Tabs Navigation */}
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
            {/* Find Teammates Tab */}
            <div
              style={
                find
                  ? {
                      flex: 1,
                      padding: "15px",
                      textAlign: "center",
                      background: "#e8f5e9",
                      color: "#009624",
                      fontWeight: "bold",
                      borderBottom: "4px solid #00c853",
                      cursor: "pointer",
                    }
                  : {
                      flex: 1,
                      padding: "15px",
                      textAlign: "center",
                      background: "#fff",
                      color: "#333",
                      cursor: "pointer",
                    }
              }
              onClick={() => setActiveTab("find")}
            >
              Find Teammates
            </div>

            {/* Become a Teammate Tab */}
            <div
              style={
                become
                  ? {
                      flex: 1,
                      padding: "15px",
                      textAlign: "center",
                      background: "#e8f5e9",
                      color: "#009624",
                      fontWeight: "bold",
                      borderBottom: "4px solid #00c853",
                      cursor: "pointer",
                    }
                  : {
                      flex: 1,
                      padding: "15px",
                      textAlign: "center",
                      background: "#fff",
                      color: "#333",
                      cursor: "pointer",
                    }
              }
              onClick={() => setActiveTab("become")}
            >
              Become a Teammate
            </div>

            {/* My Postings Tab */}
            <div
              style={
                myPosting
                  ? {
                      flex: 1,
                      padding: "15px",
                      textAlign: "center",
                      background: "#e8f5e9",
                      color: "#009624",
                      fontWeight: "bold",
                      borderBottom: "4px solid #00c853",
                      cursor: "pointer",
                    }
                  : {
                      flex: 1,
                      padding: "15px",
                      textAlign: "center",
                      background: "#fff",
                      color: "#333",
                      cursor: "pointer",
                    }
              }
              onClick={() => setActiveTab("myPosting")}
            >
              My Posting
            </div>
          </div>

          {/* Tab Content Containers */}

          {/* 1. Find Teammates Tab Content */}
          <div style={contentDisplay(find)}>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "30px",
                maxWidth: "100%",
              }}
            >
              <input
                type="text"
                placeholder="Search location ....."
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  width: "100%",
                }}
                onChange={(e) => {
                  setSearch(e.target.value);
                  handleSearch();
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
              className="loadi"
              style={{
                textAlign: "center",
                fontFamily: "Arial",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              <p>{loading ? "Loading teammates..." : ""}</p>{" "}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "20px",
              }}
            >
              {Array.isArray(data) &&
                data.map((value, index) => (
                  <div
                    key={index}
                    style={{
                      background: "#fff",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 24px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(0,0,0,0.1)";
                    }}
                  >
                    {/* Header */}
                    <div
                      style={{
                        background: "#1f2937", // slate gray
                        color: "#f8f9fa", // soft white
                        padding: "15px",
                        fontSize: "20px",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        {value.name.split(" ")[0].slice(0, 1).toUpperCase() +
                          value.name.slice(1)}
                      </span>
                      <span>{value.age} years</span>
                    </div>

                    {/* Body */}
                    <div style={{ padding: "15px", lineHeight: "1.6" }}>
                      <p>
                        <strong>Location:</strong>{" "}
                        {value.location.charAt(0).toUpperCase() +
                          value.location.slice(1)}
                      </p>
                      <p>
                        <strong>Contact:</strong> {value.contact}
                      </p>
                      <p>
                        <strong>Position:</strong>{" "}
                        {value.position.charAt(0).toUpperCase() +
                          value.position.slice(1)}
                      </p>
                      <p>
                        <strong>Experience:</strong> {value.experience} years
                      </p>
                      <p>
                        <strong>Gender:</strong>{" "}
                        {value.gender.charAt(0).toUpperCase() +
                          value.gender.slice(1)}
                      </p>
                      <p>
                        <strong>Availability:</strong>{" "}
                        {value.availability.charAt(0).toUpperCase() +
                          value.availability.slice(1)}
                      </p>
                      <p>
                        {value.about.charAt(0).toUpperCase() +
                          value.about.slice(1)}
                      </p>
                    </div>

                    {/* Footer */}
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
                          cursor: "pointer",
                          transition: "background 0.3s ease",
                        }}
                      >
                        Confirm as Teammate
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* 2. Become a Teammate Form Content */}
          {/* form of teammate */}
          <div style={contentDisplay(become)}>
            <div
              className="msg"
              style={{
                display: !register ? "none" : "block",
                background: "#fff3cd", // soft yellow background
                color: "#856404", // dark golden text
                padding: "15px 20px",
                borderRadius: "8px",
                border: "1px solid #ffeeba", // subtle border
                fontSize: "16px",
                fontWeight: "500",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                marginTop: "15px",
              }}
            >
              <p style={{ margin: 0 }}>
                Already posted for being a teammate. Feel free to edit it in my
                posting section!
              </p>
            </div>

            <form
              style={{ maxWidth: "800px", margin: "0 auto" }}
              onSubmit={(e) => handleSubmit(e)}
            >
              <div id="become-teammate" className="teammate-tab">
                <div
                  className="form-container"
                  style={{
                    width: "100%",
                    display: register ? "none" : "block",
                  }}
                >
                  <h3
                    style={{
                      textAlign: "center",
                      borderBottom: "5px solid green",
                      marginBottom: "30px",
                    }}
                  >
                    Become Teammate
                  </h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="teammate-name">Full Name</label>
                      <input
                        type="text"
                        id="teammate-name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="teammate-age">Age</label>
                      <input
                        type="number"
                        id="teammate-age"
                        min="16"
                        max="60"
                        required
                        placeholder="Enter Age"
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="teammate-location">Location</label>
                      <select
                        id="teammate-location"
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
                      <label htmlFor="teammate-phone">Contact Number</label>
                      <input
                        type="tel"
                        id="teammate-phone"
                        required
                        minLength="10"
                        maxLength="10"
                        pattern="[0-9]{10}"
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter Contact Number"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="teammate-position">
                        Preferred Position
                      </label>
                      <select
                        id="teammate-position"
                        required
                        onChange={(e) => setPosition(e.target.value)}
                      >
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
                      <select
                        id="teammate-experience"
                        required
                        onChange={(e) => setExperience(e.target.value)}
                      >
                        <option value="">Select Experience</option>
                        <option value="0-1">0-1 Years</option>
                        <option value="1-3">1-3 Years</option>
                        <option value="3-5">3-5 Years</option>
                        <option value="5+">5+ Years</option>
                      </select>
                    </div>
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
                    <label htmlFor="teammate-availability">Availability</label>
                    <select
                      id="teammate-availability"
                      required
                      onChange={(e) => setAvailable(e.target.value)}
                    >
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
                      placeholder="About yourself..."
                      onChange={(e) => setAbout(e.target.value)}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                    style={{ background: "#0d1b2a", color: "#5efc82" }}
                  >
                    Post as Teammate
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* 3. My Postings Content */}
          <div style={{ marginTop: "50px", ...contentDisplay(myPosting) }}>
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
                  onClick={() => setIsEdit(true)} // Open the Edit Modal
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
