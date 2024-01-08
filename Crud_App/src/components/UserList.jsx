import {useDispatch , useSelector} from 'react-redux';
import {fetchUsers} from '../features/fetchUsers'
import { useEffect } from 'react';

function UserList() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.user)
  useEffect(()=>{
    dispatch(fetchUsers());
  },[])
  console.log(data)
  return (
    <div>
        {data.isLoading ? <h1>Loading...</h1> :
            data?.users?.map((user)=>{
                return <p key={user.id}>{user.firstName}</p>
            })
        }
    </div>
  )
}

export default UserList

