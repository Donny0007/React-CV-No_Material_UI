import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Education = ( { handleResumeUpdate } ) => {

  const[education, setEducation] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    handleResumeUpdate( {education } );
    navigate('/Skills');
  }
  return (
    <form onSubmit={ handleSubmit }>
        <input type="text" 
          className= 'form-control' 
          placeholder='Your Academic qualifications here'
          onChange={ (e) => setEducation(e.target.value) } />
        <button
          type='submit' className = "btn btn-primary">
          Next
        </button>
    </form>
  )
}
export default Education
