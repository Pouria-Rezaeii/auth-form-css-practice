import Person from "@mui/icons-material/PersonOutline";
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

interface IProps extends CommonProps {}
export default function Register(props: IProps) {
  const { className } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      className={clsx(classes.container, className)}
    >
      <Box width="100%">
        <Heading align="center">Create Account</Heading>
        <SocialLinks style={{ marginBottom: "1.75rem" }} />
        <Typography
          align="center"
          color="#979898"
          fontSize=".75rem"
          fontWeight={500}
          marginBottom="1rem"
        >
          or use your email for registration:
        </Typography>
        <Grid container direction="column" style={{ gap: ".5rem" }}>
          <TextInput placeholder="Name" startAdornment={<Person />} />
          <TextInput placeholder="Email" startAdornment={<Email />} />
          <TextInput placeholder="Password" startAdornment={<Lock />} classes={{}} />
        </Grid>
      </Box>
      <Button variant="contained">Sign up</Button>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {},
}));
