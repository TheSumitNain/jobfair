import React from "react"
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./component/js/Home";
import LabourDhunde from "./component/js/LabourDhunde";
import JobDhunde from "./component/js/JobDhunde";

const App = () => {
  return (
    <>
      <Routes>
        <Route exect path='/' element={<Home />} />
        <Route path='/labourdhunde' element={<LabourDhunde />} />
        <Route path='/jobdhunde' element={<JobDhunde />} />
      </Routes>
    </>
  )
}

export default App;