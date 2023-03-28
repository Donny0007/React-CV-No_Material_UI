import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Objective = ( { handleResumeUpdate } ) => {

    const[objective, setObjective] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleResumeUpdate( { objective });
        navigate('/Education');
    }
  return (
    <div className='container'>
        <h3>Objectives</h3>

        <textArea 
        placeholder = "Your objectives here"
        size = "60" 
        value = { objective }
        onChange = { (e) => { setObjective(e.target.value) } }/>

        <button onClick={handleSubmit}>Next</button>
    </div>
  )
}
