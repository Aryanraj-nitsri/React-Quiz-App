import React from 'react'
import { useState,useEffect } from 'react'
import "./Quiz.css"
import Questions from './Questions'
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';


 function Quize({name,questions,setquestion,score,setscore}) {
  const [options,setoptions]=useState()
  const [correct,setcorrect]=useState("")
  const[currquestion,setcurrquestion]=useState(0);
  
  useEffect(()=>{
    console.log("working")
    setoptions(questions && handlesuffle([questions[currquestion]?.correct_answer,...questions[currquestion]?.incorrect_answers]));
    setcorrect(questions  && questions[currquestion]?.correct_answer)
  },[questions,currquestion]);

  const handlesuffle=(opt)=>{
    return opt.sort(()=>Math.random() - 0.5);
  }
  
  console.log(questions)
  console.log(options)
  console.log("quiz")
  return (
    
    
  <div className="quiz_container">
    { questions ?(
      <>
<div className="username">
    <h2>Welcome {name}</h2>
  </div>
  
  <Questions
  name={name}
  questions={questions}
  setquestion={setquestion}
  options={options}
  setoptions={setoptions}
  currquestion={currquestion}
  setcurrquestion={setcurrquestion}
  correct={correct}
  score={score}
  setscore={setscore}
  />
      </>
      
    ):<Box sx={{ display: 'flex',justifyContent:'center',marginTop:'25vh' }}>
    <CircularProgress size={150} thickness={1} />
  </Box>
    
  }
  
  </div>



)

}
export default Quize;
