import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { projectAuth } from "../firebase/config";
import Alert from '@material-ui/lab/Alert';
import "./authentication.css";

const Authentication = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      projectAuth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          alert(err)
        });
    } else {
      projectAuth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          alert(err);
          
        });
    }
  };

  return (
    <div className="login-form">
      <h1>Welcome to Ever Note</h1>
      <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
      <div className="form">
        <form className="authentication-form" onSubmit={handleSubmit}>
          <div className="input-field">
            <TextField
              type="email"
              id="standard-basic"
              value={email}
              label="Enter your Email"
              style={{ maxWidth: "300px", width: "90vw", marginTop: "25px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              value={password}
              id="standard-basic"
              label="Enter your pass"
              style={{ maxWidth: "300px", width: "90vw", marginTop: "25px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="btn">
              <Button type="submit" variant="contained" color="secondary">
                {isSignIn ? "Sign In" : "Sign up"}
              </Button>
              <Button
                style={{
                  marginLeft: "50px",
                }}
                variant="contained"
                color="secondary"
                onClick={() => {
                  setEmail("tester@test.com");
                  setPassword("123456");
                }}
              >
                Test Login
              </Button>
            </div>
          </div>
        </form>
        {isSignIn ? (
          <p style={{ color: "black" }}>
            New user ?{" "}
            <span
              style={{
                color: "#03203c",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                setIsSignIn(false);
                setEmail("");
                setPassword("");
              }}
            >
              Register
            </span>
          </p>
        ) : (
          <p style={{ color: "black" }}>
            <span
              style={{
                color: "#03203c",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                setIsSignIn(true);
                setEmail("");
                setPassword("");
              }}
            >
              Sing In
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
export default Authentication;
