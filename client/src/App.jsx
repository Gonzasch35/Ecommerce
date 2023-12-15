import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Login from './pages/Login'
import AuthLayout from './layouts/AuthLayout'
import Register from './pages/Register'
import ForgotPass from './pages/ForgotPass'
import RestartPass from './pages/RestartPass'
import ConfirmAccount from './pages/ConfirmAccount'
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';
import Landing from './layouts/Landing'
import Home from './pages/Home'

function App() {
  


  return (
    <> 
      <Routes>
        <Route path='/' element={<Landing />}>
          <Route index element={<Home />}/>
        </Route>
        <Route path='/login' element={<AuthLayout />} >
          <Route path='/login' element={<Login />}/>
          <Route path='registrar' element={<Register />}/>
          <Route path='olvide-password' element={<ForgotPass />}/>
          <Route path='confirm/:token' element={<ConfirmAccount />}/>
          <Route path='olvide-password/:token' element={<RestartPass />}/>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
