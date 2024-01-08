import List from '../UI-KIT/List';
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
    <div style={{width: "100%"}}>
        {data.isLoading ? <h1>Loading...</h1> : <List data={data}/>}
    </div>
  )
}

export default UserList

