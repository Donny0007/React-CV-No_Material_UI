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
    <div className='container'>
      <form onSubmit={ handleSubmit }>
        <fieldset>
          <legend>Skills</legend>
        <textarea 
          className= "form-control" 
          placeholder='Add Your Skills Here' 
          value={skills} 
          onChange = { (e) => { setSkills(e.target.value) } }
        />
        <button 
          className='btn btn-primary'
          type='submit'>
          Next
        </button>
        </fieldset>
      </form>
    </div>
  )
}
export default Skills;