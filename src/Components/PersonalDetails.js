import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PersonalDetails = ( { handleResumeUpdate } ) => {
  const[name, setName] = useState("");
  const[dob, setdob] = useState("");
  const[address, setAddress] = useState("");
  const[email, setEmail] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResumeUpdate( { name, dob, address, email } );
    navigate('/Objective');

  };

  return (
    <div className='container'>
    <form onSubmit={ handleSubmit }>
      <fieldset>
        <legend>Personal Details</legend>

        <input 
        type="text" 
        className='form-control ' 
        placeholder='Your full name here'
        value={ name } 
        onChange={(e) => setName(e.target.value)}/>

        <input 
        type="date" 
        className='form-control' 
        placeholder='Your dob here' 
        value={ dob }
        onChange={(e) => setdob(e.target.value)}/>

        <input 
        type="text" 
        className='form-control' 
        placeholder='Your current address here'
        value={ address } 
        onChange={(e) => setAddress(e.target.value)}/>

        <input 
        type="text" 
        className='form-control' 
        placeholder='Your email here'
        value={ email } 
        onChange={(e) => setEmail(e.target.value)}/>

        <button 
          type='submit'
          className='btn btn-primary'>
          Next
        </button>

        </fieldset>
    </form>
    </div>
  )
}
export default PersonalDetails