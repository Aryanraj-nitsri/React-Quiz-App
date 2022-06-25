import React from 'react'
import './Result.css'
import { useNavigate } from "react-router-dom";

 function Result({score,setscore}) {
  const navigate=useNavigate()
  const resultHandler=()=>{
    navigate('/')
    setscore(0);
  }
  return (
    <>
    <div className='result_container' >
      <div className="result_header">

    {score &&  (<h1>FINAL SCORE:{score}</h1>)}
      </div>
    <div className="result_box">
      <button className='result_button' onClick={resultHandler}>GO TO HOMEPAGE</button>
    </div>
    </div>
    </>
  )
}
export default Result;
