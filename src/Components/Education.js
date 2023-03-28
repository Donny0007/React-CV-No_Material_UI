import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Education = ( { handleResumeUpdate } ) => {

  const[degree, setDegree] = useState('');
  const[institute, setInstitute] = useState('');
  const[score, setScore] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    handleResumeUpdate( { degree, institute, score } );
    navigate('/Skills');
  }
  return (
    <div className='container'>
    <form onSubmit={ handleSubmit } >
      <fieldset>
        <legend>Academic Qualifications</legend>

        <input type="text" 
          className= 'form-control' 
          placeholder='Your Course or Program Here'
          value={ degree }
          onChange={ (e) => setDegree(e.target.value) }
        />
          
        <input type="text" 
          className= 'form-control' 
          placeholder='Your Institute here'
          value={ institute }
          onChange={ (e) => setInstitute(e.target.value) }
        />
          
        <input type="text" 
          className= 'form-control' 
          placeholder='Your Score Here'
          value={ score }
          onChange={ (e) => setScore(e.target.value) }
        />
          
        <button
          type='submit' className = "btn btn-primary">
          Next
        </button>
      </fieldset>
    </form>
    </div>
  )
}
export default Education
