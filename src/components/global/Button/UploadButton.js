import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function UploadButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="txt/*"
        // className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
    </div>
  );
}
