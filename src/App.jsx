import { useState } from 'react'
import { projects } from './projects/projects.js'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.jsx'

function App() {
  console.log(projects)
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
