import { deleteUsers, userIsUpdating } from '../features/fetchUsers';
import './list.css'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
function List({ data }) {
  const dispatch = useDispatch();

  function handleDelete(userId){
      dispatch(deleteUsers(userId))
  }
  function handleUpdate(){
      dispatch(userIsUpdating())
  }
  return (
    <>
      <ul className='list-ul'>
        {data.users?.slice(0,100 )?.map((user, index) => {
          return (
            <li className="user-list" key={user.id}>
              <div className="userinfo">
                <h3>{index + 1}</h3>
                <h3 className='name-info'>{user.firstName + " " + user.lastName}</h3>
              </div>
              <div className="userbuttons">
                <Link to="/form">
                  <button
                    className="update-button"
                    onClick={handleUpdate}
                  > 
                    Update
                  </button>
                </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
