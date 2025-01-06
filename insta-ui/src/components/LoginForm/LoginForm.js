import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className='login-container text-center'>
        <h1>Instagram</h1>
        <form>
            <input className='form-control' type='text' name='username' placeholder='Phone number, username or email address' />
            <input className='form-control' type='password' name='password' placeholder='Password' />
        </form>
    </div>
  )
}

export default LoginForm