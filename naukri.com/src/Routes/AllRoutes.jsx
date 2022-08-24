
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function AllRoutes() {
  
  
    return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path='/job' element={<h1>Job Page</h1>}/>
      <Route path='/jobview/:id' element={<h1>Job viewer</h1>}/>
      <Route path='/login' element={<h1>Login</h1>}/>
      <Route path='/signup' element={<h1>SignUp</h1>}/>
    </Routes>
  )
}
