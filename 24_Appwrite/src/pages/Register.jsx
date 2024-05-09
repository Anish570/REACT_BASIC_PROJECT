import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Utils/AuthContext'

const Register = () => {
  const { registerUser } = useAuth()
  const [credentials, setCredentials] = useState({
    name: '',
    email: "",
    password: "",
    password2: ""
  })

  const handleinputchange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCredentials({ ...credentials, [name]: value })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (credentials.password == credentials.password2) {
      registerUser(credentials)
    }

  }
  return (
    <div className="container">
      <div className="login-register-container">
        <form onSubmit={(e) => { handleRegister(e) }}>

          <div className="form-field-wrapper">
            <label>Name:</label>
            <input
              required
              type="text"
              name="name"
              value={credentials.name}
              onChange={(e) => { handleinputchange(e) }}
              placeholder="Enter name..."
            />
          </div>

          <div className="form-field-wrapper">
            <label>Email:</label>
            <input
              required
              type="email"
              name="email"
              value={credentials.email}
              onChange={(e) => { handleinputchange(e) }}
              placeholder="Enter email..."
            />
          </div>

          <div className="form-field-wrapper">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={(e) => { handleinputchange(e) }}
              placeholder="Enter password..."
            />
          </div>

          <div className="form-field-wrapper">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="password2"
              value={credentials.password2}
              onChange={(e) => { handleinputchange(e) }}
              placeholder="Confirm password..."
            />
          </div>


          <div className="form-field-wrapper">

            <input
              type="submit"
              value="Register"
              className="btn"
            />

          </div>

        </form>

        <p>Already have an account? <Link to="/login">Login</Link></p>

      </div>
    </div>
  )
}

export default Register
