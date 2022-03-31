import InputBase, { InputBaseProps } from "@mui/material/InputBase";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";

export default function TextInput(props: InputBaseProps) {
  const { className, startAdornment, classes, ...rest } = props;
  const c = useStyles();

  return (
    <InputBase
      fullWidth
      startAdornment={startAdornment && <div className={c.startAdornment}>{startAdornment}</div>}
      className={clsx(c.input, className)}
      classes={{ focused: c.focused, ...classes }}
      {...rest}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "#f4f8f7",
    overflow: "hidden",
    borderRadius: 2,
    padding: ".4rem .75rem",
    fontSize: ".925rem",
  },
  focused: {
    backgroundColor: "#eef4f3",
  },
  startAdornment: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 2,
    marginRight: ".35rem",
    "& svg": {
      color: "#aaa",
      fontSize: "1.05rem",
    },
  },
}));
