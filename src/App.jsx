import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Routes/Router'
import Layout from './Components/Layout'

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}

export default App
