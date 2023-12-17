import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { get_productosById } from '../../redux/actions';

const DetailProduct = () => {

    const {id} = useParams()
    const producto = useSelector(store=>store.detailProduct)
    const {nombre, imagen, precio, talle, color, stock, descripcion, categoryId} = producto

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_productosById(id))
    }, [])
    

  return (
    <div className='flex h-52 flex-row'>
        <div className=''>
            <img src={imagen} alt="" />
        </div>
        <div className='flex flex-col gap-10'>
            <h2>{nombre}</h2>
            <p>{precio}</p>
        </div>
    </div>
  )
}

export default DetailProduct