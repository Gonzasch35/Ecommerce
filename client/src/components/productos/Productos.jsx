import React, { useEffect, useState } from 'react'
import Producto from './Producto'
import { useSelector } from 'react-redux'
import Skeleton from './skeleton'

const Productos = ({productos}) => {

  const user = useSelector(state=>state.user)
  const [data,setData] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setData(true);
    },500)

    setData(false)
  },[productos])

  return (
    <div className="flex flex-wrap py-10 gap-2 min-h-screen items-center justify-center bg-gray-100">
        {
        
        data ? (
          productos.map((producto) => {
            // Verificar si el producto está en la propiedad 'productos' del usuario
            const estaEnProductosDelUsuario = user.productos?.some(
              (p) => p.id === producto.id
            );
            return (
              <Producto
                key={producto.id}
                producto={producto}
                fav={estaEnProductosDelUsuario}
              />
            );
          })
        ) : (
          <Skeleton category={false} cantidad={productos.length}></Skeleton>
        )
      
      }
    </div>
  )
}

export default Productos