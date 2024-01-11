import '../UI/sidebar.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar-section' >
            <ul className='side-list'>
            <Link to="/">
                <li className='side-list-item li_hover'>
                    <a href="">USER</a>
                </li>
            </Link>
            <Link to="/form">
                <li className='side-list-item li_hover'>
                   <a href="">Form</a>
                </li>
            </Link>
            </ul>
    </div>
  )
}

export default Sidebar