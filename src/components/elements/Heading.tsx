import Typography, { TypographyProps } from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";

interface IProps extends TypographyProps<"h1"> {
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export default function Heading(props: IProps) {
  const { className, component = "h1", ...rest } = props;
  const c = useStyles();

  return (
    <Typography
      component={component}
      className={clsx(
        c.typography,
        component === "h1" && c.h1,
        component === "h2" && c.h2,
        component === "h3" && c.h3,
        component === "h4" && c.h4,
        component === "h5" && c.h5,
        component === "h6" && c.h6,
        className
      )}
      {...rest}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  typography: {
    fontSize: "1rem",
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
  h1: {
    fontSize: "1.9rem",
    padding: "1rem 0",
  },
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
}));
