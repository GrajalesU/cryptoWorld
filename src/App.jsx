import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Routes/Router'
import Layout from './Components/Layout'
import { UserProvider } from './Context/user'

function App () {
  return (
    <BrowserRouter>
    <UserProvider>
      <Layout>
        <Router />
      </Layout>
    </UserProvider>
    </BrowserRouter>
  )
}

export default App
