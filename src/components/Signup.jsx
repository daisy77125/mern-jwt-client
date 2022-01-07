import React from "react";
import { Link } from "react-router-dom";
import { register } from "../services/userServices";
import axios from "axios";
import { useState, useEffect } from "react";
import { Paper, Button, TextField } from "@material-ui/core";

const apiUrl = process.env.REACT_APP_API_URL;

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
      password,
    };

    axios
      .post(`${apiUrl}/users`, user)
      .then((res) => {
        window.location = "/login";
      })
      .catch((e) => {
        alert("username already taken!");
      });

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="full_screen flex column">
        <Paper elevation={3} className="form">
          <div className="form_heading">Signup</div>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={username}
              onChange={onChangeUsername}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              required
              className="form-control"
              value={password}
              onChange={onChangePassword}
            />
          </div>

          <br />
          <div className="form-group">
            <Button
              type="submit"
              style={{ marginLeft: "auto" }}
              variant="outlined"
              size="medium"
              color="secondary"
            >
              Register
            </Button>
          </div>
        </Paper>

        <div style={{ margin: "10px 0" }}>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
