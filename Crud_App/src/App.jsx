import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import UserList from './components/UserList'
import { Routes , Route } from "react-router-dom";

function App() {

  return (
    <>
    
      <Header/>
      <div style={{ display: 'flex', minWidth: "80vw"}}>
        <div className='sidebar'>
         <Sidebar/>
        </div>
        <Routes>
          <Route path='/' element={<UserList/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
