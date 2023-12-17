import { useEffect } from 'react'
import 'flowbite';
import {Route, Routes} from 'react-router-dom'
import './App.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001/'
import Login from './pages/login/Login'
import AuthLayout from './layouts/AuthLayout'
import Register from './pages/login/Register'
import ForgotPass from './pages/login/ForgotPass'
import RestartPass from './pages/login/RestartPass'
import ConfirmAccount from './pages/login/ConfirmAccount'
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';
import Landing from './layouts/Landing'
import Home from './pages/client/Home'
import Admin from './layouts/Admin';
import DashboardAdmin from './pages/admin/DashboardAdmin';
import CreateProducto from './pages/admin/CreateProducto';
import { useDispatch } from 'react-redux';
import { get_categorias, get_productos } from "./redux/actions"
import DetailProduct from './pages/client/DetailProduct';


function App() {
  
  const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(get_productos())
        dispatch(get_categorias())
    }, [])

  return (
    <> 
      <Routes>
        <Route path='/admin' element={<Admin />}>
          <Route index element={<DashboardAdmin />}/>
          <Route path='crear-producto' element={<CreateProducto />}/>
        </Route>
        <Route path='/' element={<Landing />}>
          <Route index element={<Home />}/>
          <Route path='/producto/:id' element={<DetailProduct />} />
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
