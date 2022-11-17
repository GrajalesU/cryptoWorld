import './styles.scss'
import React from 'react'
import { useDispatch, useUser } from '../../Context/user'
import { useNavigate } from 'react-router-dom'
export default function Header () {
  const user = useUser()
  const userDispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <header className="Header">
      <button type='button' onClick={() => {
        navigate('/')
      }}>
      <span className="Header_Title">
        <span className="material-icons">currency_bitcoin</span>
        Crypto World
      </span>
      </button>
      {user.name
        ? <button type='button' onClick={() => {
          userDispatch({ type: 'logout' })
        }}>
            <span className="Header_Login">
              {user.name}
              <span className="material-icons">login</span>
            </span>
          </button>

        : <button type='button' onClick={() => {
          navigate('/login')
        }}>
            <span className="Header_Login">
              Login
              <span className="material-icons">person</span>
            </span>
          </button>
      }

    </header>
  )
}
