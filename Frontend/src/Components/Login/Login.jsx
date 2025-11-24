import { useEffect, useState } from "react";
import "../auth.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [data, setData] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    console.log(data);
  }, [data]);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const login = await axios.post(`http://localhost:3000/api/v1/login`, {
        email: email,
        password: pass,
      });
      setData(login.data.data);
      setErr("");

      if (login.status === 200) {
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 404) {
        setErr("Invalid email or password.");
      } else {
        setErr("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <>
      <div className="all">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <a href="index.html" className="logo">
                Fut<span>Hub</span>
              </a>
              <h1>Login to Your Account</h1>
              <p>Access your football management dashboard</p>
            </div>

            <div id="login-alert" className="alert alert-danger"></div>

            <form id="login-form" className="auth-form">
              <div className="form-group">
                <label htmlFor="login-email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="login-email"
                  className="form-input"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="login-password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  className="form-input"
                  placeholder="Enter your password"
                  required
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>

              <div className="form-options">
                <a href="#" id="forgot-password" className="forgot-link">
                  Forgot password?
                </a>

                <p style={{ color: "red", textAlign: "center " }}>{err}</p>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-auth"
                onClick={(e) => handleLogin(e)}
              >
                Login to FutHub
              </button>

              <div className="social-login">
                <p className="divider">Or continue with</p>
                <div className="social-buttons">
                  <button type="button" className="social-btn google-btn">
                    {/* Google SVG */}
                    Google
                  </button>
                  <button type="button" className="social-btn facebook-btn">
                    {/* Facebook SVG */}
                    Facebook
                  </button>
                </div>
              </div>

              <div className="auth-footer">
                <p>
                  Don't have an account?{" "}
                  <Link className="auth-link" to="/signup">
                    Sign up here
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
