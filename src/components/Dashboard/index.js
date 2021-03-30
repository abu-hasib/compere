import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import UploadButton from "../global/Button/UploadButton";
import "./index.css";
import { Button, Typography } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({}));

const Dashboard = () => {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState(false);

  function onEnter(event) {
    setName("");
    if (event.keyCode === 13) {
      setDisplay(true);
    }
  }

  function onChange(event) {
    setName(event.target.value);
    setDisplay(false);
  }

  return (
    <div className="dash">
      <Typography>Add a Student</Typography>
      <div className="compare">
        <div>
          {display && <h5>{name}</h5>}
          <TextField
            margin="normal"
            required
            value={name}
            fullWidth
            id="name"
            label="Enter a name"
            name="name"
            autoComplete="email"
            onKeyUp={onEnter}
            onChange={onChange}
          />
          <UploadButton></UploadButton>
        </div>
        <div>
          <UploadButton></UploadButton>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
