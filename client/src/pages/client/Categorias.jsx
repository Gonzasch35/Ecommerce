import React, { useEffect } from 'react'
import Productos from '../../components/productos/Productos'
import { useDispatch, useSelector } from 'react-redux'
import { filter_product } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import Skeleton from '../../components/productos/skeleton'

const Categorias = () => {

    let productos = useSelector(state=>state.productos);
    const dispatch = useDispatch()
    const param = useParams()
    const id = Number(param.id)

    useEffect(() => {
        dispatch(filter_product(id))
    }, [id])
    
    console.log({productos:productos});

  return (
    <div>
      {
        productos.length > 0 ?
         <Productos productos={productos}/> : 
         <Skeleton/>
      }
      
    </div>
  )
}

export default Categorias