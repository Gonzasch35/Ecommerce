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

function App() {
  
  const [productos, setProductos] = useState([])

  const handlerProductos = async () => {
    const products = await axios.get('http://localhost:3001/productos')
    setProductos(products.data)
  }

  return (
    <> 
      <Routes>
        <Route path='/' element={<AuthLayout />} >
          <Route index element={<Login />}/>
          <Route path='registrar' element={<Register />}/>
          <Route path='olvide-password' element={<ForgotPass />}/>
          <Route path='confirm/:token' element={<ConfirmAccount />}/>
          <Route path='olvide-password/:token' element={<RestartPass />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
