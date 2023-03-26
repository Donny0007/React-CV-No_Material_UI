import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
            <ul>
                <li>
                    <Link className='list' to = "/">Home</Link>
                </li>
                <li>
                    <Link className='list' to = "/PersonalDetails">Personal Details</Link>
                </li>
                <li>
                    <Link className='list' to = "/Education">Education</Link>
                </li>
                <li>
                    <Link className='list' to = "/Skills">Skills</Link>
                </li>
                <li>
                    <Link className='list' to = "/Experience">Experience</Link>
                </li>
                <li>
                    <Link className='list' to = "/ShowCV">ShowCV</Link>
                </li>
            </ul>
    </>
  )
}
export default Layout;