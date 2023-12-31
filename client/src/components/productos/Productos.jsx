import React from 'react'
import Producto from './Producto'
import { useSelector } from 'react-redux'

const Productos = ({productos}) => {

  const user = useSelector(state=>state.user)

  return (
    <div className="flex flex-wrap py-10 gap-2 min-h-screen items-center justify-center bg-gray-100">
        {productos?.map((producto) => {
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
      })}
    </div>
  )
}

export default Productos