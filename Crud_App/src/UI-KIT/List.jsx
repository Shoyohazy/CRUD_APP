import { deleteUsers } from '../features/fetchUsers';
import './list.css'
import {useDispatch, useSelector} from 'react-redux'
function List({ data }) {
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.user)
  console.log(users)
  function handleDelete(userId){
      dispatch(deleteUsers(userId))
  }
  return (
    <>
      <ul className='list-ul'>
        {data.users?.slice(0,10 )?.map((user, index) => {
          return (
            <li className="user-list" key={user.id}>
              <div className="userinfo">
                <h3>{index + 1}</h3>
                <h3 className='name-info'>{user.firstName + " " + user.lastName}</h3>
              </div>
              <div className="userbuttons">
                <button
                  className="update-button"
                >
                  Update
                </button>
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
