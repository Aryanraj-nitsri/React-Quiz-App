import React from "react";
import "./Home.css";
import TextField from "@mui/material/TextField";
import Data from "./Data";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
function Home({ name, setname, fetchquestion }) {
  const [category, setcategory] = useState("");
  const [difficulty, setdifficulty] = useState("");
  const [error, seterror] = useState(false);
  const navigate = useNavigate()
  
  const submitHandler = () => {
    if (!name || !category || !difficulty) {
      seterror(true);
      return error;
    } 
    else {
      seterror(false);
      fetchquestion(category, difficulty);
      navigate("/quize");
    }
  }
console.log("home")
    return (
      <div className="home">
        <img src="../../quiz2.svg" alt="error" className="image" />
        

        <div className="fields">
        <div>
          <span className="quize_title">Quiz Settings</span>
        </div>
          {error && <Error>Fill all details</Error>}
          <TextField
            label="Enter Your name"
            variant="outlined"
            className="text"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select Category"
            className="text"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            {Data.map((option) => (
              <MenuItem key={option.category} value={option.value}>
                {option.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-select-currency"
            select
            label="Select Difficulty"
            className="text"
            value={difficulty}
            onChange={(e) => {
              setdifficulty(e.target.value);
            }}
          >
            <MenuItem key="easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            className="text"
            size="large"
            onClick={submitHandler}
          >
            Next
          </Button>
        </div>
      </div>
    );
  };

export default Home;
