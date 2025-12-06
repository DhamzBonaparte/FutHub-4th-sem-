import "../PDash.css"
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Opponent() {
  const[beOpponent,setBeOpponent]=useState(false);
  return (
    <>
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
            <button className="become-opponent-btn" style={{backgroundColor:"#0d1b2a"}}>Become an Opponent</button>
          </div>

          <div className="opponents-grid" id="opponents-grid">
            {/* put the available opponents in the area  */}
          </div>
        </div>

        <div
          id="become-opponent"
          className="opponent-tab"
            style={!beOpponent?{ display: "none" }:{display:"block"}}
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
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
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
    </>
  );
}
