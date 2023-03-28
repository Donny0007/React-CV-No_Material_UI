import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PersonalDetails from './Components/PersonalDetails'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Home from './Components/Home'
import Layout from './Components/Layout'
import Nopath from './Components/Nopath'
import './App.css';
import ShowCV from './Components/ShowCV'
import { Objective } from './Components/Objective'

export const App = () => {

  const [resumeData, setResumeData] = useState({
    experience: ''
  })

  const handleResumeUpdate = (newData) => {
    setResumeData({...resumeData, ...newData});
  }
  return (
    <div>
      <BrowserRouter>
      <Layout /><br /><br/>
        <Routes>
          <Route index element = { <Home /> } /> 
          <Route path = '/PersonalDetails' element = { <PersonalDetails handleResumeUpdate = { handleResumeUpdate } /> } />
          <Route path = "/Objective" element = { <Objective handleResumeUpdate = { handleResumeUpdate } /> } />
          <Route path = "/Education" element = { <Education handleResumeUpdate = { handleResumeUpdate } /> } />
          <Route path = "/Skills" element = { <Skills handleResumeUpdate={ handleResumeUpdate }/> } />
          <Route path = "/Experience" element = { <Experience handleResumeUpdate = { handleResumeUpdate } /> } />
          <Route path = '*' element = { <Nopath />} />
          <Route path = '/ShowCV' element = { <ShowCV resumeData = { resumeData } />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App