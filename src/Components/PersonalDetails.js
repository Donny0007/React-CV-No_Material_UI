import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PersonalDetails = ( { handleResumeUpdate } ) => {
  const[name, setName] = useState("");
  const[age, setAge] = useState("");
  const[email, setEmail] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResumeUpdate( { name, age, email } );
    navigate('/Education');

  };

  return (
    <form className='jumbotron' onSubmit={ handleSubmit }>
        <input 
        type="text" 
        className='form-control' 
        placeholder='Your full name here'
        value={name} 
        onChange={(e) => setName(e.target.value)}/>
        <input 
        type="number" 
        className='form-control' 
        placeholder='Your age here' 
        value={age}
        onChange={(e) => setAge(e.target.value)}/>
        <input 
        type="text" 
        className='form-control' 
        placeholder='Your email here'
        value={email} 
        onChange={(e) => setEmail(e.target.value)}/>
        <button 
          type='submit'
          className='btn btn-primary'>
          Next
        </button>
    </form>
  )
}
export default PersonalDetails