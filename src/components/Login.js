import React, { useState} from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { Apple } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import googlePic from "./google-icon-logo-png-transparent.png";
import {Alert} from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, googleSignIn, appleSignIn,resetPassword } = useUserAuth(); 
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleBtn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAppleBtn = async (e) => {
    e.preventDefault();
    try {
      await appleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };


  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      alert("Password reset email sent. Check your inbox.");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <section className="container">
        <div className="sectionOne">
          <div className="element">
            <h1>Board. </h1>
          </div>
        </div>
        <div className="sectionTwo">
          <div className="centered">
            <h1>Sign In</h1>
            {error && <Alert variant="danger"> {error} </Alert>}
            <p> Sign in to your account </p>

            <div className="g-btn">
              <div className="btn-inner ">
                <Button
                  variant="light"
                  className="googleBtn"
                  onClick={handleGoogleBtn}
                >
                  <img
                    src={googlePic}
                    style={{ width: "15px", height: "15px", float: "left" }}
                  ></img>
                  Sign in with Google
                </Button>
              </div>
              <div className="btn-inner">
                <Button
                  className="appleBtn"
                  variant="light"
                  onClick={handleAppleBtn}
                >
                  <Apple />
                  &nbsp; &nbsp; Sign in with Apple
                </Button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="username"> Email address </label>
              <input
                id="username"
                type="text"
                autoComplete="false"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password"> Password </label>
              <input
                id="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="/" onClick={handleForgotPassword}>
                Forgot password?
              </a>
              <button> Sign In </button>
            </form>
            <div className="center">
              <p>
                Don 't have an account? &nbsp;
                <span className="line">
                  <Link to="/signup"> Register here </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
