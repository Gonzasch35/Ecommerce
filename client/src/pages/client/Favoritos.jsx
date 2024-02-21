import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Favoritos = () => {

    const productos = useSelector(state => state.user)
    /* useEffect(() => {
      first
    
      
    }, [productos]) */
    

  return (
    <div>
        {}
        {productos?.productos?.map(producto => {
            return (
                <h1>{producto.nombre}</h1>
            )
        })}
    </div>
  )
}

export default Favoritos