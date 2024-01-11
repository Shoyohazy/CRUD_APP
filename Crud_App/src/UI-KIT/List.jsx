import './list.css'
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
