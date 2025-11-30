import "./Home.css";
import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import ktm from "./images/ktm_futsal.jpg";
import bkt from "./images/bkt_futsal.jpg";
import bir from "./images/biratnagar_futsal.jpg";
import lal from "./images/lalitput_futsal.jpg";
import pok from "./images/pokhara_futsal.jpg";
import chi from "./images/chitwan_futsal.jpg";
import but from "./images/butwal_futsal.jpg";

export default function Home() {
  const home = useRef(null);
  const prop = useRef(null);
  const blog = useRef(null);

  const navigate = useNavigate();

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(Math.floor(window.scrollY));
    });
  });

  function redirect() {
    navigate("/login");
  }

  function scrollToRef(ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <header
        style={{
          background: "#0D1B2A",
        }}
      >
        <div className="logo">
          <i className="fas fa-futbol"></i>
          Fut <span style={{ color: "lightgreen" }}>Hub</span>
        </div>
        <div className="mobile-menu">
          <i className="fas fa-bars"></i>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="dropdown">
              <Link to="/login">Login</Link>{" "}
              <i className="fas fa-chevron-down"></i>
            </li>
            <li className="dropdown">
              <Link to="/signup">Signup</Link>{" "}
              <i className="fas fa-chevron-down"></i>
            </li>
            <li>
              <a href="#news">Blog</a>
            </li>
          </ul>
        </nav>
      </header>
      <div
        className="hor"
        style={{
          height: "1vh",
          backgroundColor: "#0D1B2A",
          position: "sticky",
          top: "10%",
          zIndex: 100,
        }}
      >
        <div
          className="glide"
          style={{
            height: "1vh",
            width: `${scroll}px`,
            backgroundColor: "#F9A825",
            position: "sticky",
            top: "11%",
            zIndex: 100,
          }}
        ></div>
      </div>
      <section className="hero" ref={home}>
        <div className="hero-content">
          <h1>Play in Courts with anyone near you</h1>
          <p>
            Book futsal courts, find opponents and teammates, and join the
            futsal community in Nepal.
          </p>
          <button className="cta-button">
            <Link to="/login" style={{textDecoration:"none",color:"white"}}>Get Started</Link> <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className="hero-image"></div>
      </section>
      <section className="action-section" id="action-section" ref={prop}>
        <h2 className="section-title">What We Offer</h2>
        <div className="action-boxes">
          <div className="action-box" onClick={() => redirect()}>
            <i className="fas fa-calendar-check"></i>
            <h3>Book Futsal</h3>
            <p>
              Find and book futsal courts near you with real-time availability
              and instant confirmation.
            </p>
          </div>
          <div className="action-box" onClick={() => redirect()}>
            <i className="fas fa-users"></i>
            <h3>Find Opponents</h3>
            <p>
              Connect with other players looking for opponents to complete your
              futsal matches.
            </p>
          </div>
          <div className="action-box" onClick={() => redirect()}>
            <i className="fas fa-user-friends"></i>
            <h3>Find Teammates</h3>
            <p>
              Find players to join your team or join existing teams for regular
              futsal games.
            </p>
          </div>
        </div>
      </section>
      <section className="partners-section" id="partners">
        <h2 className="section-title">Our Partners</h2>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={ktm} alt="Kathmandu_Futsal" />
            <Carousel.Caption>
              <h3 style={{ color: "#F8F9FA", fontWeight: 700,backgroundColor:"#1B2626",borderRadius:"20px" }}>
                Kathmandu Futsal
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={pok} alt="Pokhara_Futsal" />
            <Carousel.Caption>
              <h3 style={{ color: "#F8F9FA", fontWeight: 700,backgroundColor:"#1B2626",borderRadius:"20px" }}>
                Pokhara Futsal
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={chi} alt="Chitwan_Futsal" />
            <Carousel.Caption>
              <h3 style={{ color: "#F8F9FA", fontWeight: 700,backgroundColor:"#1B2626",borderRadius:"20px" }}>
                Chitwan futsal
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={bir} alt="Biratnagar_Futsal" />
            <Carousel.Caption>
              <h3 style={{ color: "#F8F9FA", fontWeight: 700,backgroundColor:"#1B2626",borderRadius:"20px" }}>
                Biratnagar futsal
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={lal} alt="Lalitpur_Futsal" />
            <Carousel.Caption>
              <h3 style={{ color: "#F8F9FA", fontWeight: 700,backgroundColor:"#1B2626",borderRadius:"20px" }}>
                Lalitpur futsal
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={bkt} alt="Bhaktapur_Futsal" />
            <Carousel.Caption>
              <h3 style={{ color: "#F8F9FA", fontWeight: 700,backgroundColor:"#1B2626",borderRadius:"20px" }}>
                Bhaktapur futsal
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img src={but} alt="Butwal_Futsal" />
            <Carousel.Caption>
              <h3 style={{ color: "#F8F9FA", fontWeight: 700,backgroundColor:"#1B2626",borderRadius:"20px" }}>
                Butwal futsal
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="news-section" id="news" ref={blog}>
        <h2 className="section-title">Latest News & Articles</h2>
        <div className="news-grid">
          <div className="news-card">
            <img
              src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="New Futsal Opening"
            />
            <div className="news-content">
              <h3>New Futsal Arena Opening in Thamel</h3>
              <p>
                A brand new futsal court with international standards is opening
                next month in Thamel...
              </p>
              <div className="news-date">
                <i className="far fa-calendar-alt"></i> October 15, 2023
              </div>
            </div>
          </div>
          <div className="news-card">
            <img
              src="https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
              alt="Maintenance Notice"
            />
            <div className="news-content">
              <h3>Maintenance Schedule for Popular Courts</h3>
              <p>
                Several popular futsal courts will be under maintenance during
                the upcoming festival season...
              </p>
              <div className="news-date">
                <i className="far fa-calendar-alt"></i> October 10, 2023
              </div>
            </div>
          </div>
          <div className="news-card">
            <img
              src="https://rosecityfutsal.com/wp-content/uploads/2024/11/1O8A1769-Enhanced-NR-copy.jpg"
              alt="Tournament News"
            />
            <div className="news-content">
              <h3>Annual Futsal Tournament Registration Open</h3>
              <p>
                Registration for the annual inter-college futsal tournament is
                now open. Teams can register through FutHub...
              </p>
              <div className="news-date">
                <i className="far fa-calendar-alt"></i> October 5, 2023
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: "#0D1B2A" }}>
        <div className="footer-content">
          <div className="footer-column">
            <h3>FutHub</h3>
            <p>
              Making futsal booking and opponent finding simple and convenient
              for players across Nepal.
            </p>
            <div className="social-links">
              <a href="#">
                <svg
                  style={{ color: "blue", textAlign: "center" }}
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  aria-label="Facebook"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="currentColor" />
                  <text
                    style={{ textAlign: "center" }}
                    x="12"
                    y="17"
                    textAnchor="middle"
                    fontSize="15"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                    fill="#fff"
                  >
                    f
                  </text>
                </svg>
              </a>
              <a href="#">
                <svg
                  style={{
                    color: "black",
                    textAlign: "center",
                    borderRadius: "50%",
                    height: "6vh",
                    width: "4vw",
                  }}
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  aria-label="X"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="4" fill="currentColor" />
                  <path
                    d="M6 6l5.8 7.3L6.3 18h2.3l4-3.8 2.8 3.8H18l-5.9-7.8L17.6 6h-2.3l-3.5 3.3L9.3 6H6Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="instagramGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#405DE6" />
                      <stop offset="25%" stopColor="#833AB4" />
                      <stop offset="50%" stopColor="#E1306C" />
                      <stop offset="75%" stopColor="#FCAF45" />
                      <stop offset="100%" stopColor="#FFDC80" />
                    </linearGradient>
                  </defs>

                  <circle
                    cx="12"
                    cy="12"
                    r="12.2"
                    fill="url(#instagramGradient)"
                  />

                  <circle cx="12" cy="12" r="5" fill="#fff" />
                  <circle
                    cx="12"
                    cy="12"
                    r="3.4"
                    fill="url(#instagramGradient)"
                  />

                  <circle cx="17.5" cy="6.5" r="1.5" fill="#fff" />
                </svg>
              </a>
              <a href="#">
                <svg
                  style={{
                    color: "blue",
                    textAlign: "center",
                    borderRadius: "50%",
                    height: "6vh",
                    width: "6vw",
                  }}
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-label="LinkedIn"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12.5" fill="currentColor" />

                  <rect x="6" y="9.5" width="2.6" height="8" fill="#fff" />
                  <circle cx="7.3" cy="6.8" r="1.9" fill="#fff" />
                  <path
                    d="M11 9.5h2.5v1.4c.5-.9 1.4-1.6 2.9-1.6 2.3 0 3.6 1.2 3.6 3.8v4.6h-2.6v-4c0-1.4-.6-2.1-1.8-2.1-1.2 0-2 .8-2 2.1v4h-2.6v-8.2Z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToRef(home)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToRef(prop)}
                >
                  Book Futsal
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToRef(prop)}
                >
                  Find Opponents
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToRef(prop)}
                >
                  Find Teammates
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToRef(blog)}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> New Summit College,
                Kathmandu
              </li>
              <li>
                <i className="fas fa-phone"></i> +977 9840267722 <br />
                <i className="fas fa-phone"></i> +977 9811734678
              </li>
              <li>
                <i className="fas fa-envelope"></i> sulavdhami420@gmail.com{" "}
                <br />
                <i className="fas fa-envelope"></i>lizanniraula@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2023 FutHub. All rights reserved. | BCA Project - Tribhuvan
            University
          </p>
        </div>
      </footer>

      <div
        id="authModal"
        className="modal"
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 1000,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "10px",
            width: "90%",
            maxWidth: "400px",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "10px",
              right: "15px",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            &times;
          </span>
          <h2
            id="modalTitle"
            style={{
              marginBottom: "1.5rem",
              color: "var(--dark-green)",
            }}
          >
            Login
          </h2>
          <div id="modalContent"></div>
        </div>
      </div>
    </>
  );
}
