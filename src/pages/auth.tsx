import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { v4 } from "uuid";
import React from "react";
import Login from "components/modules/Login";
import Register from "components/modules/Register";
import Heading from "components/elements/Heading";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import IconButton from "@mui/material/IconButton";
import Home from "@mui/icons-material/Home";

const ITEM_WIDTH = 320;
const BACKGROUND_WIDTH = 870;
const ANIMATION_DURATION = 0.9;
const TIMING_FUNCTION = `cubic-bezier(.3,-0.12,.59,1.07)`;
const SCALE = 1.35;

export default function Auth() {
  // prevent animations on first load
  const [areAnimationsInit, setAreAnimationsInit] = React.useState(false);
  const { search } = useLocation();
  const { initMode } = qs.parse(search, { ignoreQueryPrefix: true });
  const [isNewUser, setIsNewUser] = React.useState(initMode === "signUp");
  const c = useStyles({ isNewUser });
  const handleToggle = () => {
    !areAnimationsInit && setAreAnimationsInit(true);
    setIsNewUser((prev) => !prev);
  };

  const smallShapes = [
    { width: 400, height: 400, bottom: -230, left: -240, borderRadius: "50%" },
    { width: 32, height: 17, bottom: 90, left: 250, transform: "rotateZ(50deg)" },
    { width: 27, height: 27, top: 60, left: 230, transform: "rotateZ(45deg)" },
    { width: 85, height: 85, top: 250, left: 290, clipPath: "polygon(35% 0, 0 90%, 100% 60%)" },
    { width: 48, height: 48, top: 180, left: 440, transform: "rotateZ(40deg)" },
    { width: 37, height: 37, bottom: 120, right: 250, borderRadius: "50%" },
    { width: 32, height: 17, top: 250, right: 240, transform: "rotateZ(20deg)" },
    { width: 85, height: 100, bottom: 0, right: 100, clipPath: "polygon(0 25%, 100% 0, 70% 100%)" },
    { width: 23, height: 23, bottom: 230, right: 3, transform: "rotateZ(30deg)" },
    {
      width: 270,
      height: 250,
      bottom: 380,
      right: -20,
      clipPath: "polygon(100% 100%, 0 80% , 90% 0%)",
    },
  ];

  return (
    <div className={clsx(c.flex, c.container)}>
      <div className={c.card}>
        <div className={c.formsWrapper}>
          <Login
            className={clsx(
              !areAnimationsInit && isNewUser && c.hidden,
              areAnimationsInit && isNewUser && c.loginFormDisappear,
              areAnimationsInit && !isNewUser && c.loginFormAppear
            )}
          />
          <Register
            className={clsx(
              !areAnimationsInit && !isNewUser && c.hidden,
              areAnimationsInit && !isNewUser && c.registerFormDisappear,
              areAnimationsInit && isNewUser && c.registerFormAppear
            )}
          />
        </div>
        <div
          className={clsx(
            c.backgroundWindow,
            areAnimationsInit && !isNewUser && c.backgroundWindowMoveRight,
            areAnimationsInit && isNewUser && c.backgroundWindowMoveLeft
          )}
        >
          <Button className={c.toggleButton} variant="outlined" onClick={handleToggle}>
            <span style={{ opacity: 0 }}>placeholder</span>
            <Typography
              className={clsx(
                c.buttonLabel,
                // appears when user is signing up, bottom of changeToLoginText
                !areAnimationsInit && !isNewUser && c.hidden,
                areAnimationsInit && isNewUser && c.buttonLoginLabelAppear,
                areAnimationsInit && !isNewUser && c.buttonLoginLabelDisappear
              )}
            >
              sign in
            </Typography>
            <Typography
              className={clsx(
                c.buttonLabel,
                // appears when user is logging in, bottom of changeToRegisterText
                !areAnimationsInit && isNewUser && c.hidden,
                areAnimationsInit && !isNewUser && c.buttonRegisterLabelAppear,
                areAnimationsInit && isNewUser && c.buttonRegisterLabelDisappear
              )}
            >
              sign up
            </Typography>
          </Button>
          <div
            className={clsx(
              c.greenBackground,
              areAnimationsInit && !isNewUser && c.greenBackgroundLeft,
              areAnimationsInit && isNewUser && c.greenBackgroundRight
            )}
          >
            {smallShapes.map((item) => (
              <div key={v4()} className={c.smallShape} style={{ ...item }} />
            ))}
          </div>
        </div>
        <div
          className={clsx(
            c.flex,
            c.textBox,
            c.changeToLoginText,
            !areAnimationsInit && !isNewUser && c.hidden,
            areAnimationsInit && isNewUser && c.textBoxAppear,
            areAnimationsInit && !isNewUser && c.textBoxDisappear
          )}
        >
          <Heading color="white">Welcome Back!</Heading>
          <Typography>To keep connected with us please login with your personal info</Typography>
        </div>
        <div
          className={clsx(
            c.flex,
            c.textBox,
            c.changeToRegisterText,
            !areAnimationsInit && isNewUser && c.hidden,
            areAnimationsInit && !isNewUser && c.textBoxAppear,
            areAnimationsInit && isNewUser && c.textBoxDisappear
          )}
        >
          <Heading color="white">Hello, Friend!</Heading>
          <Typography>Enter your personal info details and start journey with us</Typography>
        </div>
        <Link
          to="/"
          title="Home"
          style={{ position: "absolute", zIndex: 4, top: ".5rem", left: ".5rem" }}
        >
          <IconButton>
            <Home
              // htmlColor={!areAnimationsInit && isNewUser ? "white" : theme.palette.primary.main}
              className={clsx(
                !areAnimationsInit && isNewUser ? c.white : !areAnimationsInit ? c.green : "",
                areAnimationsInit && isNewUser && c.getWhite,
                areAnimationsInit && !isNewUser && c.getGreen
              )}
            />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

interface IStyleProps {
  isNewUser: boolean;
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "#F0F4F3",
  },
  card: {
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  formsWrapper: {
    backgroundColor: "white",
    padding: "4.5rem 7rem 5rem",
    display: "flex",
    "& > *": {
      flexShrink: 0,
      height: 405,
      width: ITEM_WIDTH,
    },
  },
  greenBackground: ({ isNewUser }: IStyleProps) => ({
    width: BACKGROUND_WIDTH,
    height: "100%",
    position: "absolute",
    top: 0,
    left: isNewUser ? 0 : `calc(-${BACKGROUND_WIDTH}px + ${ITEM_WIDTH}px)`,
    background:
      "linear-gradient(58deg, #1eb991 15% ,#1fb795 15% 25%, #23b598 25% 35%, #23b39c 35% 45%, #23b19f 45% 55%, #24afa3 55% 65%, #24ada7 65% 75%, #24abaa 75% 85%, #24a9ad 85%)",
  }),
  backgroundWindow: ({ isNewUser }: IStyleProps) => ({
    position: "absolute",
    overflow: "hidden",
    zIndex: 2,
    height: "100%",
    top: 0,
    width: ITEM_WIDTH,
    left: isNewUser ? 0 : `calc(100% - ${ITEM_WIDTH}px)`,
    textAlign: "center",
    paddingTop: "20.75rem",
  }),
  smallShape: {
    position: "absolute",
    backgroundColor: "#fff8e821",
  },
  textBox: {
    width: ITEM_WIDTH,
    marginTop: "10rem",
    position: "absolute",
    zIndex: 3,
    top: 0,
    flexDirection: "column",
    padding: "0 1.2rem",
    "& *": {
      textAlign: "center",
      color: "white",
    },
    "& > *:nth-child(2)": {
      fontWeight: 500,
      opacity: 0.87,
      fontSize: ".85rem",
      width: "85%",
    },
  },
  changeToLoginText: {
    left: 0,
  },
  changeToRegisterText: {
    right: 0,
  },
  toggleButton: {
    color: "white",
    position: "relative",
    overflow: "hidden",
    zIndex: 4,
    border: "solid 1px white",
    borderRadius: 50,
    width: "55%",
    padding: ".65rem 0",
    "& *": {
      fontSize: ".75rem",
      fontWeight: 600,
    },
    "&:hover": {
      border: "solid 1px white",
    },
  },
  buttonLabel: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // backfaceVisibility: "hidden",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  white: {
    color: "white",
  },
  green: {
    color: theme.palette.primary.main,
  },
  hidden: {
    animation: "$hidden forwards",
    zIndex: -1,
  },
  "@keyframes hidden": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0,
    },
  },
  textBoxAppear: {
    animation: `$textBoxAppear ${ANIMATION_DURATION}s forwards`,
  },
  "@keyframes textBoxAppear": {
    "0%": {
      zIndex: -1,
    },
    "37%": {
      zIndex: -1,
    },
    "38%": {
      zIndex: 3,
    },
    "100%": {
      zIndex: 3,
    },
  },
  textBoxDisappear: {
    animation: `$textBoxDisappear ${ANIMATION_DURATION}s forwards`,
  },
  "@keyframes textBoxDisappear": {
    "0%": {
      zIndex: 3,
    },
    "61%": {
      zIndex: 3,
    },
    "62%": {
      zIndex: -1,
    },
    "100%": {
      zIndex: -1,
    },
  },
  greenBackgroundLeft: {
    animation: `$greenBackgroundLeft ${ANIMATION_DURATION}s ${TIMING_FUNCTION} forwards`,
  },
  "@keyframes greenBackgroundLeft": {
    "0%": {
      left: 0,
      transform: "scaleX(1)",
    },
    "50%": {
      transform: `scaleX(${1 / SCALE})`,
    },
    "100%": {
      left: `calc(-${BACKGROUND_WIDTH}px + ${ITEM_WIDTH}px)`,
      transform: "scaleX(1)",
    },
  },
  greenBackgroundRight: {
    animation: `$greenBackgroundRight ${ANIMATION_DURATION}s ${TIMING_FUNCTION} forwards`,
  },
  "@keyframes greenBackgroundRight": {
    "0%": {
      left: `calc(-${BACKGROUND_WIDTH}px + ${ITEM_WIDTH}px)`,
      transform: "scaleX(1)",
    },
    "50%": {
      transform: `scaleX(${1 / SCALE})`,
    },
    "100%": {
      left: 0,
      transform: "scaleX(1)",
    },
  },
  backgroundWindowMoveLeft: {
    animation: `$backgroundWindowMoveLeft ${ANIMATION_DURATION}s ${TIMING_FUNCTION} forwards, $expand2 ${ANIMATION_DURATION}s ${TIMING_FUNCTION}`,
  },
  "@keyframes backgroundWindowMoveLeft": {
    "0%": {
      left: `calc(100% - ${ITEM_WIDTH}px)`,
    },
    "100%": {
      left: 0,
    },
  },
  backgroundWindowMoveRight: {
    animation: `$backgroundWindowMoveRight ${ANIMATION_DURATION}s ${TIMING_FUNCTION} forwards, $expand ${ANIMATION_DURATION}s ${TIMING_FUNCTION}`,
  },
  "@keyframes backgroundWindowMoveRight": {
    "0%": {
      left: 0,
    },
    "100%": {
      left: `calc(100% - ${ITEM_WIDTH}px)`,
    },
  },
  "@keyframes expand": {
    "0%": {
      transform: "scaleX(1)",
    },
    "50%": {
      transform: `scaleX(${SCALE})`,
    },
    "100%": {
      transform: "scaleX(1)",
    },
  },
  // DIDN'T work properly sharing one expand keyframes, don't know why, I had to duplicate
  "@keyframes expand2": {
    "0%": {
      transform: "scaleX(1)",
    },
    "50%": {
      transform: `scaleX(${SCALE})`,
    },
    "100%": {
      transform: "scaleX(1)",
    },
  },
  registerFormAppear: {
    animation: `$registerFormAppear ${ANIMATION_DURATION}s ease-out forwards`,
  },
  "@keyframes registerFormAppear": {
    "0%": {
      zIndex: -1,
      transform: `translateX(-${ITEM_WIDTH / 2}px)`,
    },
    "49%": {
      zIndex: -1,
      transform: `translateX(-${ITEM_WIDTH / 2}px)`,
    },
    "50%": {
      zIndex: 1,
      transform: `translateX(-${ITEM_WIDTH / 2}px)`,
    },
    "100%": {
      zIndex: 1,
      transform: "translateX(0)",
    },
  },
  registerFormDisappear: {
    animation: `$registerFormDisappear ${ANIMATION_DURATION / 2}s ease-in forwards`,
  },
  "@keyframes registerFormDisappear": {
    "0%": {
      zIndex: 1,
      transform: "translateX(0px)",
    },
    "99%": {
      zIndex: 1,
      transform: `translateX(-${ITEM_WIDTH / 2}px)`,
    },
    "100%": {
      zIndex: -1,
      transform: `translateX(-${ITEM_WIDTH / 2}px)`,
    },
  },
  loginFormAppear: {
    animation: `$loginFormAppear ${ANIMATION_DURATION}s ease-out forwards`,
  },
  "@keyframes loginFormAppear": {
    "0%": {
      zIndex: -1,
      transform: `translateX(${ITEM_WIDTH / 2}px)`,
    },
    "49%": {
      zIndex: -1,
      transform: `translateX(${ITEM_WIDTH / 2}px)`,
    },
    "50%": {
      zIndex: 1,
      transform: `translateX(${ITEM_WIDTH / 2}px)`,
    },
    "100%": {
      zIndex: 1,
      transform: "translateX(0)",
    },
  },
  loginFormDisappear: {
    animation: `$loginFormDisappear ${ANIMATION_DURATION / 2}s ease-in forwards`,
  },
  "@keyframes loginFormDisappear": {
    "0%": {
      zIndex: 1,
      transform: "translateX(0px)",
    },
    "99%": {
      zIndex: 1,
      transform: `translateX(${ITEM_WIDTH / 2}px)`,
    },
    "100%": {
      zIndex: -1,
      transform: `translateX(${ITEM_WIDTH / 2}px)`,
    },
  },
  buttonLoginLabelAppear: {
    animation: `$buttonLoginLabelAppear ${ANIMATION_DURATION}s ${TIMING_FUNCTION} forwards`,
  },
  "@keyframes buttonLoginLabelAppear": {
    "0%": {
      opacity: 0,
      transform: "translate(-300%, -50%)",
    },
    "30%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
      transform: "translate(-50%, -50%)",
    },
  },
  buttonLoginLabelDisappear: {
    animation: `$buttonLoginLabelDisappear ${ANIMATION_DURATION}s ${TIMING_FUNCTION} forwards`,
  },
  "@keyframes buttonLoginLabelDisappear": {
    "0%": {
      opacity: 1,
      transform: "translate(-50%, -50%)",
    },
    "70%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0,
      transform: "translate(-300%, -50%)",
    },
  },
  buttonRegisterLabelAppear: {
    animation: `$buttonRegisterLabelAppear ${ANIMATION_DURATION}s ${TIMING_FUNCTION} forwards`,
  },
  "@keyframes buttonRegisterLabelAppear": {
    "0%": {
      opacity: 0,
      transform: "translate(200%, -50%)",
    },
    "30%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
      transform: "translate(-50%, -50%)",
    },
  },
  buttonRegisterLabelDisappear: {
    animation: `$buttonRegisterLabelDisappear ${ANIMATION_DURATION}s ${TIMING_FUNCTION} forwards`,
  },
  "@keyframes buttonRegisterLabelDisappear": {
    "0%": {
      opacity: 1,
      transform: "translate(-50%, -50%)",
    },
    "70%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0,
      transform: "translate(200%, -50%)",
    },
  },
  getWhite: {
    animation: `$getWhite ${ANIMATION_DURATION}s forwards`,
  },
  "@keyframes getWhite": {
    "0%": {
      color: theme.palette.primary.main,
    },
    "74%": {
      color: theme.palette.primary.main,
    },
    "75%": {
      color: "white",
    },
    "100%": {
      color: "white",
    },
  },
  getGreen: {
    animation: `$getGreen ${ANIMATION_DURATION}s forwards`,
  },
  "@keyframes getGreen": {
    "0%": {
      color: "white",
    },
    "20%": {
      color: "white",
    },
    "21%": {
      color: theme.palette.primary.main,
    },
    "100%": {
      color: theme.palette.primary.main,
    },
  },
}));
