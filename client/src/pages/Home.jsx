import NavBar from "../components/NavBar"
import { useSelector, useDispatch } from 'react-redux'
import { get_productos } from "../redux/actions"
import { useEffect } from "react"
import Productos from "../components/productos/Productos"

const Home = () => {

    const productos = useSelector(state=> state.productos)

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(get_productos())
    }, [])

  return (
    <div>
        <NavBar />
        <Productos 
            productos={productos}
        />
    </div>
  )
}

export default Home