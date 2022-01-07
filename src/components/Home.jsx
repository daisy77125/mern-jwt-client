import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../services/authServices";
import { AppBar, Toolbar, Button, Box } from "@material-ui/core";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const Home = () => {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);

    if (currentUser) {
      axios
        .get(`${apiUrl}/users/me`, {
          headers: { "x-auth-token": localStorage.token },
        })
        .then((response) => {
          setUsername(response.data.username);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);

  return (
    <React.Fragment>
      <AppBar color="default">
        <Toolbar>
          <h3 style={{ flexGrow: "1" }}>JWT Auth</h3>
          {!user && (
            <React.Fragment>
              <Link to="/login">
                <Button
                  style={{ marginRight: "10px" }}
                  variant="outlined"
                  color="secondary"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outlined" color="secondary">
                  Signup
                </Button>
              </Link>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <h4 style={{ marginRight: "15px" }}>{username}</h4>
              <Link to="/logout">
                <Button variant="outlined" color="secondary">
                  Logout
                </Button>
              </Link>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Home;
