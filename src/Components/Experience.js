import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Experience = ({ handleResumeUpdate }) => {
  const[experience, setExperience] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) =>{
    event.preventDefault();
    handleResumeUpdate( { experience });
    navigate('/ShowCV');
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
        <button
          className='btn btn-primary'
          type='submit'
          >
          Next
        </button>    
      </form>    
    </div>
  )
}
export default Experience;