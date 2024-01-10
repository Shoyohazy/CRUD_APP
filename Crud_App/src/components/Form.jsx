import {useFormik} from 'formik'
import { Link } from 'react-router-dom'
import '../UI/form.css'
export default function Form() {
  //const {values} = useFormik();
  return (
    <Link to='/form'> 
        <form action="">
            <div className='input-name'>
                <div id='firstname'>
                  <label htmlFor="firstname">Firstname</label>
                  <input type="name" id="" />
                </div>
                <div id='lastname'>
                  <label htmlFor="lastname">Lastname</label>
                  <input type="name" id="" />
                </div>
            </div>
            <div className='input-credentials'>
                <div id='Email'>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="" />
                </div>
                <div id='Password'>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="" />
                </div>
            </div>
        </form>
    </Link>
  )
}
