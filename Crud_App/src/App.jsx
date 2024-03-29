import { useDispatch } from 'react-redux';
import './App.css'
import Form from './components/Form';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import UserList from './components/UserList'
import { Routes , Route } from "react-router-dom";
import { fetchUsers } from './features/fetchUsers';
import { useEffect } from 'react';
import UserView from './UI-KIT/UserView';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchUsers());
  },[])

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
          <Route path='/:id' element={<UserView/>} />
        </Routes>
      </div>
      
    </>
  )
}

export default App
