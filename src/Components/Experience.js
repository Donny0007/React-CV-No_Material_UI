import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Experience = ({ handleResumeUpdate }) => {
  const[experience, setExperience] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();
    handleResumeUpdate( { experience });
  }
  return (
    <div className='jumbotron'>
      <form onSubmit={ handleSubmit }>
        <input type='text' 
        className = "form-control" 
        id='experience'
        placeholder='Your experience here' 
        value={ experience } 
        onChange = { (e) => setExperience(e.target.value) }/>
        <button type='submit' className=' btn btn-secondary'>Save and Continue</button>
      </form>
          <Link 
          to= "/ShowCV"
          className='btn btn-primary' 
          type='submit'
        >
          Next
        </Link>        
    </div>
  )
}
export default Experience;