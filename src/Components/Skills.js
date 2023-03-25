import React from 'react'
import { Link } from 'react-router-dom';

const Skills = () => {
  return (
    <div className='jumbotron'>
        <textarea className= "form-control" placeholder='Your skills here'/>
        <Link to = "/Exp" className='btn btn-primary'>Next</Link>
    </div>
  )
}
export default Skills;