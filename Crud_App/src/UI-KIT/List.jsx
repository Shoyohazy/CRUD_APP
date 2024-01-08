import './list.css'
function List({ data }) {
  return (
    <>
      <ul className='list-ul'>
        {data?.users?.map((user, index) => {
          return (
            <li className="user-list" key={user.id}>
              <div className="userinfo">
                <h3>{index + 1}</h3>
                <h3>{user.firstName}</h3>
              </div>
              <div className="userbuttons">
                <button
                  className="update-button"
                >
                  Update
                </button>
                <button
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
