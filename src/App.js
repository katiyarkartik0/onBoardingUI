import React from 'react'
import Interests from './Choices/Interests'
import Details from './form/Details'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Details/>}/>
        <Route path="/interests" element={<Interests/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App

