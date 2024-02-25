import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorito, get_productosById } from '../../redux/actions';
import HeartIcon from '../icons/HeartIcon';

const Producto = ({producto, fav}) => {
  
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const [isFav, setIsFav] = useState(fav)

  useEffect(() => {
    setIsFav(fav)
  }, [fav])
  

  const handleClick = (id) =>{
    dispatch(get_productosById(id))
  }

  const handleFavorito = (id) => {
    dispatch(addFavorito(user.id, {productoId: id}))
    setIsFav(!isFav)
  }

  return (
    <div className='h-min-52 my-2 '>
        <div className="mx-auto px-5">
            <div className="hover:scale-105 max-w-xs rounded-lg bg-white p-3 shadow duration-150 hover:shadow-md relative group">
              {isFav ? <button onClick={()=>handleFavorito(producto.id)} className='z-20 absolute top-3 right-3'>
                  <HeartIcon color={'fill-violet-600 stroke-violet-800'} clase={'fill-white shadow-2xl'} svgClase={"rounded-full"}/>
              </button> : <button onClick={()=>handleFavorito(producto.id)} className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity'>
                  <HeartIcon color={'fill-white stroke-violet-800'} clase={'fill-white shadow-2xl'} svgClase={"rounded-full shadow-xl shadow-gray-400"}/>
              </button>}
              
                  <img className="w-full rounded-lg object-cover object-center" src={producto?.imagen[0]} alt="product" />
                <Link onClick={()=>handleClick(producto.id)} to={`/producto/${producto.id}`} >
                  <p className="my-4 pl-4 h-12 font-bold text-gray-500">{producto?.nombre}</p>
                </Link>
                <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">${producto.precio}</p>
            </div>
        </div>
    </div>
  )
}

export default Producto