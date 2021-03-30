import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import UploadButton from "../global/Button/UploadButton";
import "./index.css";
import { Button, Typography } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({}));

const Dashboard = () => {
  const [nameOne, setNameOne] = useState("");
  const [nameTwo, setNameTwo] = useState("");
  const [displayOne, setDisplayOne] = useState("");
  const [displayTwo, setDisplayTwo] = useState("");

  function onEnter(event) {
    if (event.keyCode === 13) {
        console.log(event.target.name)
        if (event.target.name === "nameOne") {
            setDisplayOne(nameOne);
            setNameOne("")
            return true
        }
        setDisplayTwo(nameTwo)
        setNameTwo("")
    }
  }

  function onChange(event) {
    if (event.target.name === "nameOne") {
        setNameOne(event.target.value);
        return true;
    }
    setNameTwo(event.target.value);
  }

  return (
    <div className="dash">
      <Typography>Add a Student</Typography>
      <div className="compare">
        <div>
          <Typography variant="h2">{displayOne}</Typography>
          <TextField
            margin="normal"
            required
            value={nameOne}
            fullWidth
            id="nameOne"
            label="Enter a name"
            name="nameOne"
            autoComplete="email"
            onKeyUp={onEnter}
            onChange={onChange}
          />
          <UploadButton></UploadButton>
        </div>
        <div>
        <Typography variant="h2">{displayTwo}</Typography>
          <TextField
            margin="normal"
            required
            value={nameTwo}
            fullWidth
            id="nameTwo"
            label="Enter a name"
            name="nameTwo"
            autoComplete="email"
            onKeyUp={onEnter}
            onChange={onChange}
          />
          <UploadButton></UploadButton>
        </div>
      </div>
      <Button color="primary" size="large" variant="contained">Compare</Button>
    </div>
  );
};

export default Dashboard;
