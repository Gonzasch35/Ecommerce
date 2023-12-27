import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_productosById } from '../../redux/actions';

const Producto = ({producto}) => {
  
  const dispatch = useDispatch()

  const handleClick = (id) =>{
    dispatch(get_productosById(id))
  }

  return (
    <div className='h-min-52'>
        <div class="mx-auto px-5">
            <div class="max-w-xs rounded-lg bg-white p-3 shadow duration-150 hover:scale-105 hover:shadow-md">
                <Link onClick={()=>handleClick(producto.id)} to={`/producto/${producto.id}`} >
                  <img class="w-full rounded-lg object-cover object-center" src={producto?.imagen[0]} alt="product" /> 
                </Link>
                <p class="my-4 pl-4 h-12 font-bold text-gray-500">{producto?.nombre}</p>
                <p class="mb-4 ml-4 text-xl font-semibold text-gray-800">${producto.precio}</p>
            </div>
        </div>
    </div>
  )
}

export default Producto