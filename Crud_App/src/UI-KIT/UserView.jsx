import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectAllUsers } from '../features/fetchUsers'
import User from './User'
import UserInfo from './UserInfo'

export default function UserView() {
    const {id} = useParams()
    const users = useSelector(selectAllUsers)
    console.log(users)
    const user = users.find(user => user.id  == id)
    // console.log("user",user)
  return (
        <UserInfo {...user}/>
  )
}
