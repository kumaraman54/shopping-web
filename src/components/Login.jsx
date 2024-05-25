import React from 'react'
import './css/login.css'

const Login = () => {
  return (
    <div className='login-contain'>
    <div className='singup'>
    <h1>Login</h1>
    <div className='input'>
    <input type='Email' id='email' placeholder='Enter Email'></input>
    <input type='password' id='password' placeholder='Enter Password'></input>
    <p><a href='#'>Forgot Password?</a></p>
    <button>Login</button>
    <p>Don't Have an Account?<a href='#'>Register</a></p>
    </div>
    </div>
    <div className='register'>
    <h1>Register</h1>
    <div className='input'>
    <input type='Email' id='email' placeholder='Enter Email'></input>
    <input type='password' id='password' placeholder='Enter Password'></input>
    <input type='password' id='password' placeholder='Confirm Password'></input>
    <button>Register</button>
    <p>Already Have an Account?<a href='#'>Login</a></p>
    </div>
    </div>
    </div>
  )
}

export default Login