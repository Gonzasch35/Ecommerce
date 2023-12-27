import React, { useEffect } from 'react'
import Productos from '../../components/productos/Productos'
import { useDispatch, useSelector } from 'react-redux'
import { filter_product } from '../../redux/actions'
import { useParams } from 'react-router-dom'

const Categorias = () => {

    const productos = useSelector(state=>state.productos)
    const dispatch = useDispatch()
    const param = useParams()
    const id = Number(param.id)

    useEffect(() => {
        dispatch(filter_product(id))
    }, [id])
    

  return (
    <div>
        <Productos 
            productos={productos}
        />
    </div>
  )
}

export default Categorias