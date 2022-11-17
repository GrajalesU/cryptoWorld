import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import React from 'react'
import CryptoDetail from '../pages/CryptoDetail'
import CryptoList from '../pages/CryptoList'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import { useUser } from '../Context/user'
import PrivateRoute from './PrivateRoute'

export default function Router () {
  const user = useUser()
  return (
    <Routes>
        <Route path="/" element={
        <PrivateRoute isAuthenticated={user.name}>
          <CryptoList />
        </PrivateRoute>
        } />
        <Route path="/detail" element={
        <PrivateRoute isAuthenticated={user.name}>
          <CryptoDetail />
        </PrivateRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='*' element={<Login/>} />
    </Routes>
  )
}
