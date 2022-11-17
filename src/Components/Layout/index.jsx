import Header from '../Header'
import React from 'react'

export default function Layout ({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}