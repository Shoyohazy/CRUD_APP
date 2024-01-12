import './userinfo.css'

function UserInfo(props) {

    const {lastName, firstName, age, email ,gender} = props
  return (
    <div  className="User-Card" >
        <div className='container'>
            <h3>First Name : {firstName}</h3>
            <h3>Last Name : {lastName}</h3>
            <h3>Age : {age}</h3>
            <h3>Email : {email}</h3>
            <h3>Gender:{gender}</h3>
        </div>
    </div>
  )
}

export default UserInfo