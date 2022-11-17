import './styles.scss'
import React from 'react'
export default function Header () {
  return (
    <header className="Header">
      <span className="Header_Title">
        <span className="material-icons">currency_bitcoin</span>
        Crypto World
      </span>
      <span className="Header_Login">
        Login <span className="material-icons">person</span>
      </span>
    </header>
  )
}
