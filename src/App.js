import React from 'react'
import Interests from './Choices/Interests'
import Details from './form/Details'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Verification from './OTPverification/Verification';
const App = () => {

  let [user, setUser] = useState('');
  console.log(user);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Details triggerDetails={data => setUser(data)}/>} />
          <Route path="/interests" element={<Interests user={user} />} />
          <Route path="/otp" element={<Verification user={user} />} />

        </Routes>
      </Router>

    </>
  )
}

export default App

