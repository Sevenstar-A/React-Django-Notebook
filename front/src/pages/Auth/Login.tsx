import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import AuthBase from './AuthBase'
import { api } from '../../libs/api'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../libs/constants'

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = { 'username': username, 'password': password }

    api.post('/api/token/', payload)
      .then(res => {

        const data = res.data
        localStorage.setItem(ACCESS_TOKEN, data['access']);
        localStorage.setItem(REFRESH_TOKEN, data['refresh']);
        alert("Successfully Logged in!")
        navigate("/")

      })
      .catch(e => { alert("Wrong password! "); console.log(e) })
      .finally(() => { setUsername(""); setPassword("") })


  }
  // const formData = Form


  return (
    <AuthBase>
      <form className='authForm' onSubmit={handleSubmit}>
        <h1 className='text-center text-3xl font-bold p-0 m-0'>LOGIN</h1>
        <small className='text-center p-0 m-0 text-primary'>CLEAR YOU MIND FOR NEW IDEAS!</small>

        <input type="text"
          name='username'
          placeholder='User Name'
          value={username}
          onChange={(e) => { setUsername(e.target.value) }}
        />

        <input type="text" name="password" placeholder='Password'
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
        />

        <small className='w-full text-end'>Forgot password?</small>
        <button type='submit' className='form-btn mt-3 font-extralight'>Login</button>

      </form>

      <div className='redirector'>
        <span>Don't have an account?</span>
        <NavLink to="/register" style={{ textDecoration: "none", marginLeft: "10px" }}  >
          <span className='text-primary font-extrabold tracking-wider'>Register</span>
        </NavLink>
      </div>




    </AuthBase>
  )
}
