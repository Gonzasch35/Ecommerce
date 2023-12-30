import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartProduct from '../../components/cart_product/CartProduct';

const CartProducts = () => {

    const {cart} = useSelector(state=>state.user)
  return (
    <div className='p-5'>
        <h1 className='text-2xl font-semibold'>Mi Carrito <span className='text-base text-gray-600'>{cart?.length} {cart?.length === 1 ? `Producto` : 'Productos'}</span></h1>
        <div className='py-3'>
            <Link to='/' className='text-violet-800 font-normal hover:underline'>Seguir Comprando</Link>
        </div>
        <div className='flex-col flex md:flex-row gap-3'>
            <section className='w-full md:w-2/3 flex flex-col gap-3'>
                {cart?.map(producto => (
                    <CartProduct key={producto.id} producto={producto}/>
                ))}
            </section>
            <section className='w-full border md:w-1/3'>

            </section>
        </div>
    </div>
  )
}

export default CartProducts