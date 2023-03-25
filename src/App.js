import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PersonalDetails from './Components/PersonalDetails'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Exp from './Components/Exp'
import Home from './Components/Home'
import Layout from './Components/Layout'
import Nopath from './Components/Nopath'
import './App.css';
import ShowCV from './Components/ShowCV'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Layout /><br /><br/>
        <Routes>
          <Route index element = { <Home /> } /> 
          <Route path = '/PersonalDetails' element = { <PersonalDetails /> } />
          <Route path = "/Education" element = { <Education /> } />
          <Route path = "/Skills" element = { <Skills /> } />
          <Route path = "/Exp" element = { <Exp /> } />
          <Route path = '*' element = { <Nopath />} />
          <Route path = '/ShowCV' element = { <ShowCV PersonalDetails = { PersonalDetails }/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App