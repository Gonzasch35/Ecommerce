import NavBar from "../../components/navBar/NavBar"
import { useSelector, useDispatch } from 'react-redux'
import { get_categorias, get_productos } from "../../redux/actions"
import { useEffect } from "react"
import Productos from "../../components/productos/Productos"

const Home = () => {

    const productos = useSelector(state=> state.productos)
    const categorias = useSelector(state=> state.categorias)

  return (
    <div>
        {/* <NavBar 
          categorias={categorias}
        /> */}
        <Productos 
            productos={productos}
        />
    </div>
  )
}

export default Home