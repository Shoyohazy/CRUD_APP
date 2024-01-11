import { useDispatch } from 'react-redux';
import './App.css'
import Form from './components/Form';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import UserList from './components/UserList'
import { Routes , Route } from "react-router-dom";
import { fetchUsers } from './features/fetchUsers';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchUsers());
  },[dispatch])

  return (
    <>
    
      <Header/>
      <div style={{ display: 'flex', minWidth: "80vw" , minHeight:'100vh'}}>
        <div className='sidebar'>
         <Sidebar/>
        </div>
        <Routes>
          <Route path='/' element={<UserList/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
