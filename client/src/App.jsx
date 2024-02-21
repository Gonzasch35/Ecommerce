import { useEffect, useState } from 'react'
import 'flowbite';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
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
import { useDispatch, useSelector } from 'react-redux';
import { get_categorias, get_productos, autenticarUsuario } from "./redux/actions"
import DetailProduct from './pages/client/DetailProduct';
import NavBar from './components/navBar/NavBar';
import NavBarAdmin from './components/navBar/NavBarAdmin';
import Categorias from './pages/client/Categorias';
import CartProducts from './pages/client/CartProducts';
import Footer from './components/footer/Footer';


function App() {

  const navigate = useLocation()
  //hola
  const categorias = useSelector(state=> state.categorias)
  const user = useSelector(state=> state.user)

  const dispatch = useDispatch()
  const [auth, setAuth] = useState({})
  
    /*  */
    useEffect(()=> {
        dispatch(get_productos())
        dispatch(get_categorias())
        const token = localStorage.getItem('token')
        
        console.log(token);
        if(!token){
          return
        } else {
          dispatch(autenticarUsuario(token))
        }     
        
    }, [])

  return (
    <div className='bg-gray-100'> 
      {navigate.pathname.startsWith('/admin') ?  <NavBarAdmin /> : <NavBar categorias={categorias} />}
      
      <Routes>
        <Route path='/admin' element={<Admin />}>
          <Route index element={<DashboardAdmin />}/>
          <Route path='crear-producto' element={<CreateProducto />}/>
        </Route>
        <Route path='/' element={<Landing />}>
          <Route index element={<Home />}/>
          <Route path='/categoria/:id' element={<Categorias />}/>
          <Route path='/producto/:id' element={<DetailProduct />} />
          <Route path='/carrito' element={<CartProducts />} />
        </Route>
        <Route path='/login' element={<AuthLayout />} >
          <Route index element={<Login />}/>
          <Route path='registrar' element={<Register />}/>
          <Route path='olvide-password' element={<ForgotPass />}/>
          <Route path='confirm/:token' element={<ConfirmAccount />}/>
          <Route path='olvide-password/:token' element={<RestartPass />}/>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
