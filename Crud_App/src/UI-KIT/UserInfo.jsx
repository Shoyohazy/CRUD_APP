import React from 'react'

function UserInfo(props) {
    console.log("userIno",props)
    const {lastName, firstName, age, email} = props
  return (
    <div style={{color:'white', fontWeight:'bolder'}}>
        <h1>firstName : {firstName}</h1>
        <h1>lastName : {lastName}</h1>
        <h1>age : {age}</h1>
        <h1>email : {email}</h1>
    </div>
  )
}

export default UserInfo