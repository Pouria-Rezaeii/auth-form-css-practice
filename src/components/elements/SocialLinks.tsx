import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";
import { CommonProps } from "services/types/commonProps";
import { v4 } from "uuid";
import Typography from "@mui/material/Typography";

interface IProps extends CommonProps {}

export default function SocialLinks(props: IProps) {
  const { className, ...rest } = props;
  const c = useStyles();

  return (
    <Grid container justifyContent="center" className={clsx(c.container, className)} {...rest}>
      {["f", "G", "in"].map((item) => (
        <IconButton key={v4()} className={c.iconButton}>
          <Typography fontWeight={700} fontSize="1.15rem">
            {item}
            {item === "G" && <span className={c.plus}>+</span>}
          </Typography>
        </IconButton>
      ))}
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    gap: 6,
  },
  iconButton: {
    width: "2.6rem",
    height: "2.6rem",
    border: "solid 1px #e9ecea",
    color: "#1d2120",
    "&:hover": {
      backgroundColor: "#f4f8f7cc",
    },
  },
  plus: {
    fontSize: ".75rem",
  },
}));
