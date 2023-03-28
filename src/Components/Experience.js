import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Experience = ({ handleResumeUpdate }) => {

  const[companyName, setCompanyName] = useState("");
  const[numberOfYears, setNumberOfYears] = useState();
  const[designation, setDesignation] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) =>{
    event.preventDefault();
    handleResumeUpdate( { companyName, numberOfYears, designation });
    navigate('/ShowCV');
  }
  return (
    <div className='container'>
      <form onSubmit={ handleSubmit }>
        <fieldset>
          <legend>Experience</legend>

          <input type='text' 
          className = "form-control" 
          id='experience'
          placeholder='Company Name Here' 
          value={ companyName } 
          onChange = { (e) => setCompanyName(e.target.value) }/>
          
          <input type='number' 
          className = "form-control" 
          id='experience'
          placeholder='Number of Years Here' 
          value={ numberOfYears } 
          onChange = { (e) => setNumberOfYears(e.target.value) }/>
          
          <input type='text' 
          className = "form-control" 
          id='experience'
          placeholder='Your Designation Here' 
          value={ designation } 
          onChange = { (e) => setDesignation(e.target.value) }/>
          
          <button
            className='btn btn-primary'
            type='submit'
            >
            Next
          </button>  
        </fieldset>  
      </form>    
    </div>
  )
}
export default Experience;