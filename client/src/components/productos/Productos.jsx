import React from 'react'
import Producto from './Producto'

const Productos = ({productos}) => {



  return (
    <div class="flex flex-wrap py-10 gap-2 min-h-screen items-center justify-center bg-gray-100">
        {productos?.map(producto => {
            return (
                <Producto
                    key={producto.id}
                    producto={producto}
                />
            )
        })}
    </div>
  )
}

export default Productos