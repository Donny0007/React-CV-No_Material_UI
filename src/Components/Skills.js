import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Skills = ( { handleResumeUpdate } ) => {

  const[skills, setSkills] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleResumeUpdate( { skills });
    navigate('/Experience');
  }
  return (
    <div className='jumbotron'>
      <form onSubmit={ handleSubmit }>
        <textarea 
          className= "form-control" 
          placeholder='Your skills here' 
          value={skills} 
          onChange = { (e) => { setSkills(e.target.value) } }
        />
        <button 
          className='btn btn-primary'
          type='submit'>
          Next
        </button>
      </form>
    </div>
  )
}
export default Skills;