import React from 'react'
import { Link } from 'react-router-dom'

const Exp = () => {
  return (
    <div className='jumbotron'>
        <input type='text' className = "form-control" placeholder='Your experience here'/>
        <Link className = "btn btn-primary">Next</Link>
    </div>
  )
}
export default Exp;