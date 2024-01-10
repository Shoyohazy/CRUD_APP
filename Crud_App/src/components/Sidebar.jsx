import '../UI/sidebar.css'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar-section' >
            <ul className='side-list'>
                <li className='side-list-item li_hover'>
                    <Link to="/"><a href="">USER</a></Link>
                </li>
                <li className='side-list-item li_hover'>
                    <Link to="/form"><a href="">Form</a></Link>
                </li>
            </ul>
    </div>
  )
}

export default Sidebar