import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {
  const c = useStyles();
  const dribbbleLink = "https://dribbble.com/shots/5311359-Diprella-Login";

  return (
    <Grid container direction="column" alignItems="center" className={c.container}>
      <Grid container direction="column" alignItems="center">
        <Typography color="#444" fontSize="1.15rem" fontWeight={500}>
          Implementation of login and register page with{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <Typography component="span" color="#61DAFB">
              React.js
            </Typography>
          </a>
        </Typography>
        <Typography color="#444" fontSize="1.15rem" fontWeight={500} marginTop=".5rem">
          designed by{" "}
          <a href={dribbbleLink} target="_blank" rel="noreferrer">
            <Typography component="span" color="#EA5389">
              SELECTO
            </Typography>
          </a>
        </Typography>
      </Grid>
      <a href={dribbbleLink} target="_blank" rel="noreferrer">
        <img src="login.gif" alt="login" className={c.image} />
      </a>
      <Grid container direction="column" alignItems="center">
        <Typography color="#181818" fontWeight={500} fontSize="1.25rem">
          Check out the result:
        </Typography>
        <Grid container justifyContent="center" style={{ gap: "1rem", paddingTop: "1rem" }}>
          <Link to={{ pathname: "/auth" }}>
            <Button variant="contained">Sign In</Button>
          </Link>
          <Link to={{ pathname: "/auth", search: "initMode=signUp" }}>
            <Button variant="outlined">Sign Up</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#f8f8fa",
    minHeight: "100vh",
    padding: "2rem 1rem",
    gap: "2rem",
  },
  image: {
    display: "block",
    width: "100%",
    maxWidth: 400,
    borderRadius: 8,
  },
}));
