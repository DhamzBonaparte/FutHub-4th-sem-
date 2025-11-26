import { Link } from "react-router-dom";
import "../auth.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [teamname, setTeamName] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSame, setIsSame] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsSame(false);
    if (password !== confirmPassword) {
      setIsSame(false);
    } else {
      setIsSame(true);
    }
  }, [confirmPassword, password]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const submit = await axios.post("http://localhost:3000/api/v1/signup", {
        firstName: fname,
        lastName: lname,
        email: email,
        password: password,
        teamName: teamname,
        agreedToTerms: isAgreed,
      });

      if (submit.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="all">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <Link to="/" className="logo">
                Fut<span style={{ color: "lightgreen" }}>Hub</span>
              </Link>
              <h1>Create Your Account</h1>
              <p>Join the ultimate football management platform</p>
            </div>

            <div id="signup-alert" className="alert alert-success"></div>

            <form id="signup-form" className="auth-form"onSubmit={(e) => handleSubmit(e)} >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="signup-firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="signup-firstname"
                    className="form-input"
                    placeholder="Enter your first name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="signup-lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="signup-lastname"
                    className="form-input"
                    placeholder="Enter your last name"
                    required
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="signup-email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="signup-email"
                  className="form-input"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="signup-password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="signup-password"
                  className="form-input"
                  placeholder="Create a password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="signup-confirm-password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="signup-confirm-password"
                  className="form-input"
                  placeholder="Confirm your password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <p style={{ textAlign: "center", margin: "5px", color: "red" }}>
                  {!isSame ? "Password must be same!" : ""}
                </p>
              </div>

              <div className="form-groups">
                <label htmlFor="role" className="form-label">
                  Signing up as:
                </label>
                <div className="form-options" style={{ display: "flex" }}>
                  <div className="left-owner">
                    <input
                      type="radio"
                      id="role-owner"
                      name="role"
                      value="owner"
                      className="form-input"
                      style={{ fontSize: "20px" }}
                      required
                    />
                    <label htmlFor="role-owner">Owner</label>
                  </div>

                  <div className="right-player">
                    <input
                      type="radio"
                      id="role-player"
                      name="role"
                      value="player"
                      className="form-input"
                      required
                    />
                    <label htmlFor="role-player">Player</label>
                  </div>
                </div>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  id="agree-terms"
                  className="form-check-input"
                  required
                  onChange={() => setIsAgreed(!isAgreed)}
                />
                <label htmlFor="agree-terms" className="form-label">
                  I agree to the{" "}
                  <a href="#" className="text-link">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-link">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-secondary btn-auth"
                disabled={!isSame}
                style={!isSame?{cursor:"not-allowed",backgroundColor:"grey"}:{cursor:"pointer",backgroundColor:"#ff6d00"}}
              >
                Create Account
              </button>

              <div className="auth-footer">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="auth-link">
                    Login here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
