import { deleteUsers, userIsUpdating } from '../features/fetchUsers';
import './list.css'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import User from './User';
function List(props) {
   const {users} = props;
   console.log(users)
  return (
    <>
      <ul className='list-ul'>
        {users?.slice(27,100 )?.map((user, index) => {
          console.log(user)
          return (
              <User {...user} index={index}/> 
          );
        })}
      </ul>
    </>
  );
}

export default List;
