import React from 'react'
import Producto from './Producto'

const Productos = ({productos}) => {



  return (
    <div>
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