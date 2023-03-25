import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className = " jumbotron text-center ">
        <h3>Your Home to Building CV</h3>
        <Link to = "/PersonalDetails" className='btn btn-primary'>Next</Link>
    </div>
  )
}
export default Home