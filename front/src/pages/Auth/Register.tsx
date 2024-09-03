import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthBase from './AuthBase'
import userIcon from '../../assets/user.jpg'
import { api } from '../../libs/api'


export default function Register() {

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log(data)
    try {
      const res = await api.post('/api/register/', data)
      alert("Successfully Registered! Please login using your new username and password!")
      navigate('/login')
    } catch (error) {
      alert(error)

    }



  }

  return (
    <AuthBase>

      <form className='authForm' onSubmit={handleSubmit}>
        <h1 className='text-center text-3xl font-bold p-0 m-0'>Create Account</h1>
        <small className='text-center p-0 m-0 text-primary'>YOU CAN CREATE ACCOUNTS FOR FREE</small>

        <label htmlFor='id-img' className='w-full text-start' >
          <img src={userIcon} width="50px" height="50px" className='' />
        </label>


        <input type="text" className="form-control" name='name' placeholder='Full Name' />
        <div>
          <input type="text" className="form-control" name='username' placeholder='Username' />
          <small className='w-full text-start text-gray-600'>You will use this username to login later!</small>
        </div>

        <div>
          <input type="text" className="form-control" name="password" placeholder='Password' />
          <small className='w-full text-start text-gray-600'>Make sure you use strong password!</small>
        </div>

        <div>
          <input type="text" className="form-control" name="email" placeholder='Email ' />
          <small className='w-full text-start text-gray-600'>NO TRANS OR GAY SHIT! </small>

        </div>
        <input type='file' id='id-img' className='form-control' name='img' style={{ display: "none" }} />

        <button type='submit' className='form-btn mt-6 font-extralight'>Register</button>
      </form>

      <div className='redirector'>
        Already have an account?
        <NavLink to="/login" style={{ textDecoration: "none", marginLeft: "10px" }}  >
          <span className='text-primary font-extrabold tracking-wider'>Login</span>
        </NavLink>
      </div>

    </AuthBase>

  )
}
