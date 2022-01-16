import React from 'react'
import Interests from './Choices/Interests'
import Details from './form/Details'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Verification from './OTPverification/Verification';
import Progress from './ProgressBar/Progress';
import Success from './SuccessPage/Success';
const App = () => {

  let [user, setUser] = useState('');
  let [pageNo, setPageNo] = useState([]);
  let [interests,setInterests] = useState([]);
  console.log(interests);

  return (
    <>
      <Progress pageNo={pageNo} />
      <Router>
        <Routes>
          <Route path="/" element={<Details triggerDetails={data => setUser(data)} pageNo={no=>setPageNo(no)} />} />
          <Route path="/interests" element={<Interests user={user} sendArr={arr => setInterests(arr)} pageNo={no=>setPageNo(no)}/>} />
          <Route path="/otp" element={<Verification user={user}pageNo={no=>setPageNo(no)} />} />
          <Route path="/success" element={<Success user={user} interestArr={interests} />} />

        </Routes>
      </Router>

    </>
  )
}

export default App

