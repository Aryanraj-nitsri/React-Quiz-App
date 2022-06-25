import React from "react";
import "./Questons.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
function Questions({
  name,
  questions,
  setquestions,
  options,
  setoptions,
  currquestion,
  setcurrquestion,
  correct,
  score,
  setscore,
}) {
  useEffect(() => {
    var count = 0;
    const id = setInterval(() => {
      count++;

      const timer = document.querySelector(".timer");

      if (count < 45) {
        timer.style.color = "green";
      } else {
        timer.style.color = "red";
      }

      timer.innerHTML = `00:00:${count}`;
      if (count === 60) {
        if(currquestion<8){

          setcurrquestion(currquestion + 1);
          count = 0;
        }
        else{ 
          navigate('/result')
        }
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [currquestion]);

  console.log("questions");
  const navigate = useNavigate();
  const [quizError, setQuizerror] = useState(false);
  const [selected, setselected] = useState();
  console.log(score);

  const quitHandler = () => {
    navigate("/");
  };
  const nextHandler = () => {
    if (currquestion === 9) {
      navigate("/result");
    } else {
      setselected("");

      setcurrquestion(currquestion + 1);
      if (!selected) {
        setQuizerror(true);
      }
    }
  };
  const handleOption = (item) => {
    console.log(item);
    setselected(item);
    if (item === correct) {
      setscore(score + 1);
    }
    setQuizerror(false);
    console.log("handleoption");
    console.log("selected");
  };
  // console.log(selected)
  const handleselect = (item) => {
    if (selected === item && selected === correct) {
      return "correctOne";
    } else if (selected === item && selected !== correct) {
      return "wrong";
    } else if (item === correct) return "correctOne";
  };
  return (
    <div className="Question_container">
      <div className="test_details">
        {questions && <span> {questions[currquestion].category}</span>}
        <span>Score:{score}</span>
      </div>
      <div className="timer_span">
        <span className="timer"></span>
      </div>

      <div className="question_title">
        <h2>Question:{currquestion + 1} </h2>
      </div>
      <div className="question_box">
        <div className="question_detail">
          <p>{questions && questions[currquestion].question}</p>

          {quizError && <Error>Please select one</Error>}
          <div className="buttons">
            {options &&
              options.map((item) => {
                return (
                  <button
                    key={item}
                    onClick={() => handleOption(item)}
                    className={` optionalButton ${
                      selected && handleselect(item)
                    }`}
                    disabled={selected}
                  >
                    {item}
                  </button>
                );
              })}
          </div>
          <div className="quiz_button">
            <button className="quit" onClick={quitHandler}>
              Quit
            </button>
            <button className="next" onClick={nextHandler}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Questions;
