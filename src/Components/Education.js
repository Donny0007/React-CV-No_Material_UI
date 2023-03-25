import React from 'react'
import { Link } from 'react-router-dom'
const Education = () => {
  return (
    <div className='jumbotron'>
        <input type="text" className= 'form-control' placeholder='Your Academic qualifications here'/>
        <Link to = "/Skills" className = "btn btn-primary">Next</Link>
    </div>
  )
}
export default Education
