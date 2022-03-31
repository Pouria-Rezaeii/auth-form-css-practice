import Email from "@mui/icons-material/EmailOutlined";
import Lock from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";
import { CommonProps } from "services/types/commonProps";
import Heading from "components/elements/Heading";
import SocialLinks from "components/elements/SocialLinks";
import TextInput from "components/elements/TextInput";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

interface IProps extends CommonProps {}
export default function Login(props: IProps) {
  const { className } = props;
  const c = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      className={clsx(c.container, className)}
    >
      <Box width="100%">
        <Heading align="center">Sign in to Diprella</Heading>
        <SocialLinks style={{ marginBottom: "1.75rem" }} />
        <Typography
          align="center"
          color="#979898"
          fontSize=".75rem"
          fontWeight={500}
          marginBottom="1rem"
        >
          or use your email account:
        </Typography>
        <Grid container direction="column" style={{ gap: ".5rem" }}>
          <TextInput placeholder="Email" startAdornment={<Email />} />
          <TextInput placeholder="Password" startAdornment={<Lock />} />
          <Link to="#" className={c.link}>
            <Typography fontWeight={500} color="#414444" fontSize=".875rem">
              Forgot your password?
            </Typography>
          </Link>
        </Grid>
      </Box>
      <Button variant="contained">Sign in</Button>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {},
  link: {
    padding: ".3rem 0",
    margin: ".5rem auto 0",
    borderBottom: "2px solid #eff5f3",
  },
}));
