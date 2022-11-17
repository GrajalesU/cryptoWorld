import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import React from 'react'
import CryptoDetail from '../pages/CryptoDetail'
import CryptoList from '../pages/CryptoList'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

export default function Router () {
  return (
    <Routes>
      <Route path="/" element={<CryptoList />} />
      <Route path="/detail" element={<CryptoDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  )
}
