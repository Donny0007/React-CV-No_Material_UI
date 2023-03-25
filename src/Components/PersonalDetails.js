import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PersonalDetails = () => {
  const[name, setName] = useState("");
  const[age, setAge] = useState("");
  const[email, setEmail] = useState("");
    

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <Link 
        type='submit'
        className='btn btn-primary' 
        to = "/ShowCV">Next</Link>
    </form>
  )
}
export default PersonalDetails