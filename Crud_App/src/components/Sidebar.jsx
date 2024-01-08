import '../UI/sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar-section' >
            <ul className='side-list'>
                <li className='side-list-item'>
                    <a href="">UserList</a>
                </li>
                <li className='side-list-item'>
                    <a href="">Form</a>
                </li>
            </ul>
    </div>
  )
}

export default Sidebar