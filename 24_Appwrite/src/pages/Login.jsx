import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Utils/AuthContext'

const Login = () => {
  const { loginUser } = useAuth()
  const Loginform = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handle submit been called")
    const email = Loginform.current.email.value;
    const password = Loginform.current.password.value;
    const userInfo = {
      email,
      password,
    }
    loginUser(userInfo)
  }
  return (
    <div className="container">
      <div className="login-register-container">
        <form ref={Loginform} onSubmit={handleSubmit}>

          <div className="form-field-wrapper">
            <label>Email:</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter email..."
            />
          </div>

          <div className="form-field-wrapper">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password..."
            />
          </div>


          <div className="form-field-wrapper">

            <input
              type="submit"
              value="Login"
              className="btn"
            />

          </div>

        </form>

        <p>Don't have an account? <Link to="/register">Register</Link></p>

      </div>
    </div >
  )
}

export default Login
