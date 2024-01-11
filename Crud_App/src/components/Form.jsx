import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../UI/form.css";
import { useDispatch, useSelector } from "react-redux";
import { addUsers, updateUsers, userIsUpdating } from "../features/fetchUsers";

export default function Form() {
  const userId = useSelector((state) => state.user.isUpdating);
  console.log(userId)
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    age: 0,
  });
  // console.log(userData.users)
 
  useEffect(() => {
    if(userId) {
      console.log(userData.users[userId -1])
      setFormData({...userData.users[userId -1], id: userId-1})
    }
  }, [])

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validation rules (you can customize these as needed)
    // if (!formData.firstName.trim()) {
    //   newErrors.name = 'Name is required';
    //   isValid = false;
    // }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (formData.age < 1) {
      newErrors.age = "Age is required";
      isValid = false;
    } else if (isNaN(formData.age) || parseInt(formData.age) < 0) {
      newErrors.age = "Invalid age";
      isValid = false;
    }

    if (!formData.password.trim() && !formData.password.length < 8) {
      newErrors.password = "Password is required and more than 8 keywords";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (userId) {
      // setFormData(userData);
      //console.log(formData)
      dispatch(updateUsers(formData));
      dispatch(userIsUpdating(null));
      navigate('/')
      return
    }

    if (isValid) {
      //dispacth form data
      dispatch(addUsers(formData));
    }

    navigate('/')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-name">
          <div id="firstname">
            <label htmlFor="firstName">Firstname</label>
            <input
              type="text"
              value={formData.firstName}
              name="firstName"
              onChange={handleChange}
              required
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div id="lastname">
            <label htmlFor="lastName">Lastname</label>
            <input
              type="text"
              value={formData.lastName}
              name="lastName"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="input-credentials">
          <div id="Email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div id="Password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
        </div>
        <div className="input-credentials">
          <div id="Gender">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </div>
          <div id="Age">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            {errors.age && <div className="error">{errors.age}</div>}
          </div>
        </div>
        {/* <Link to='/'> */}
        <div className="submit-button">
            <button type="submit">
              {userId ? "Update" : "Submit"}
            </button>
        </div>
        {/* </Link> */}
      </form>
    </>
  );
}
