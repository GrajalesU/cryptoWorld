import './styles.scss'
import React, { useState } from 'react'
import { LoginWithGoogle } from '../../../../utils/auth'
import { useDispatch } from '../../../../Context/user'
import { useNavigate } from 'react-router-dom'

export default function Social () {
  const [error, setError] = useState(undefined)
  const userDispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      const response = await LoginWithGoogle()
      userDispatch({ type: 'login', value: { name: response.displayName, email: response.email } })
      navigate('/')
    } catch (_) {
      setError('Ocurrió algún error, vuelve a intentarlo')
    }
  }
  return (
    <div className="Social">
      <h2 className="Social_Text">Or Sign in with social media</h2>
      <div className="Social_Buttons">
        <button type="button" className="Social_Buttons_Google" onClick={handleLogin}>
          Google
        </button>
      </div>
      {error && <small className='Error'>{error}</small>}
    </div>
  )
}
