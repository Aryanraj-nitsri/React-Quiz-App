import React from 'react'
import Header from './Component/Header';
import Footer from './Component/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home';
import Quize from './Component/Quize';
import Result from './Component/Result';
import { useState } from 'react';
import axios from "axios"

function App() {
   const [name,setname]=useState("")
   const [questions,setquestion]=useState("")
   const[score,setscore]=useState(0);
    
   const fetchquestion=async(category,difficulty )=>{
const {data}=await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
setquestion(data.results)
   }

   console.log("app")
  return (
    <BrowserRouter>

    <div className='app'>
<Header/>
<Routes>
      <Route path="/" element={<Home name={name} setname={setname} fetchquestion={fetchquestion}/>} />
      <Route path="quize" element={<Quize name={name} questions={questions} setquestion={setquestion} score={score}
      setscore={setscore}
      />} />
      <Route path="result" element={<Result score={score} setscore={setscore} />} />
    </Routes>

    </div>
<Footer/>
    </BrowserRouter>








  )
}
export default App;
