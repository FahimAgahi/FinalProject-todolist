import { Link } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";

export const LoginPage = ({}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/homePage");
  };
  return (
    <div className={classes.body1}>
      <h1 className={classes.h1}>
        <div className={classes.title}>Task Management {">"} Login</div>
      </h1>
      <div className={classes.buttons}>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <button className={classes.button}>User</button>
            <button className={classes.button}>Admin</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
