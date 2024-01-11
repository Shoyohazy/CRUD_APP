import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./list.css";
import { deleteUsers, userIsUpdating } from "../features/fetchUsers";
function User(props) {
  const { index, ...userprops } = props;
  const { id, firstName, lastName } = userprops;
  const dispatch = useDispatch();
  function handleDelete(userId) {
    dispatch(deleteUsers(userId));
  }
  function handleUpdate(userId) {
    dispatch(userIsUpdating(userId));
  }
  return (
    <li className="user-list" key={id}>
      <div className="userinfo">
        <h3>{Number(index) + 1}</h3>
        <h3 className="name-info">{firstName + " " + lastName}</h3>
      </div>
      <div className="userbuttons">
        <Link to="/form">
          <button className="update-button" onClick={() => handleUpdate(id)}>
            Update
          </button>
        </Link>
        <button onClick={() => handleDelete(id)} className="delete-button">
          Delete
        </button>
      </div>
    </li>
  );
}

export default User;
