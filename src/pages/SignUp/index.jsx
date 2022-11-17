import './styles.scss'

import React, { useState } from 'react'
import { register } from '../../utils/auth'
import { useDispatch } from '../../Context/user'
import { useNavigate } from 'react-router-dom'

export default function SignUp () {
  const [user, setUser] = useState({ name: '', password: '', email: '' })
  const [error, setError] = useState(undefined)
  const userDispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { value, id } = e.target
    setUser({
      ...user,
      [id]: value
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    const isRegistered = await register(user.email, user.password, user.name)
    if (isRegistered) {
      userDispatch({ type: 'login', value: { name: user.name, email: user.email } })
      navigate('/')
    } else {
      setError('Email already registered')
    }
  }
  return (
    <div className="SignUp">
      <div className="SignUp_Container">
        <h1 className="SignUp_Title">Create Account</h1>
        <form className="SignUp_Form" onSubmit={handleRegister}>
          <div className="SignUp_Form_Element">
            <label className="SignUp_Form_Element_Label" htmlFor="name">
              Name
            </label>
            <input
              className="SignUp_Form_Element_Input"
              type="text"
              id="name"
              value={user.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="SignUp_Form_Element">
            <label className="SignUp_Form_Element_Label" htmlFor="email">
              Email
            </label>
            <input
              className="SignUp_Form_Element_Input"
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="SignUp_Form_Element">
            <label className="SignUp_Form_Element_Label" htmlFor="password">
              Password
            </label>
            <input
              className="SignUp_Form_Element_Input"
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="SignUp_Form_Button" type="submit">
            CREATE
          </button>
          {error && <small className='Error'>{error}</small>}
        </form>
      </div>
    </div>
  )
}
