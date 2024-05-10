import { useState } from 'react'
import { projects } from './projects/projects.js'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  console.log(projects)
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
