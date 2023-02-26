import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import './login.scss'

const Login = () => {
    const {login} = useContext(AuthContext);

    const handleLogin = () => {
        login()
    }
  return (
    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat ullam distinctio reiciendis dicta aut voluptatum ratione, eos dolorem iure magni necessitatibus facilis, voluptas soluta!</p>
                <span>Don't you have an account?</span>
                
                <Link to='/register'><button>Register</button></Link>
            </div>
            <div className="right">
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login