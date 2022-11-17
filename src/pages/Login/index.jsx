import './styles.scss'
import React, { useState } from 'react'
import Social from './components/Social'
import { LoginWithEmailAndPassword } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from '../../Context/user'

export default function Login () {
  const [user, setUser] = useState({ password: '', email: '' })
  const [error, setError] = useState(undefined)
  const navigate = useNavigate()
  const userDispatch = useDispatch()

  const handleChange = (e) => {
    const { value, id } = e.target
    setUser({
      ...user,
      [id]: value
    })
  }

  const handleLoginWithEmail = async (e) => {
    e.preventDefault()
    try {
      const response = await LoginWithEmailAndPassword(user.email, user.password)
      userDispatch({ type: 'login', value: { name: response.displayName, email: response.email } })
      navigate('/')
    } catch (_) {
      setError('Ocurrió algún error, vuelve a intentarlo')
    }
  }
  return (
    <div className="Login">
      <div className="Login_Container">
        <h1 className="Login_Title">Login</h1>
        <form className="Login_Form" onSubmit={handleLoginWithEmail}>
          <div className="Login_Form_Element">
            <label className="Login_Form_Element_Label" htmlFor="email">
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
          <div className="Login_Form_Element">
            <label className="Login_Form_Element_Label" htmlFor="password">
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
          <button className="Login_Form_Button" type="submit">
            SIGN IN
          </button>
        </form>
        {error && <small className='Error'>{error}</small>}
        <small className="Login_Redirect" onClick={() => {
          navigate('/signUp')
        }}>Create account</small>
        <Social />
      </div>
    </div>
  )
}
