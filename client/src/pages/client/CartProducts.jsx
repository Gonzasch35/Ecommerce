import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartProduct from '../../components/cart_product/CartProduct';

const CartProducts = () => {

    const {cart} = useSelector(state=>state.user)
    const descuento = 0
    const subTotal = cart?.reduce((total, producto) => total + producto.precio, 0)
    const envio = subTotal > 50.000 ? 'Gratis' : 3.000
    const precioTotal = envio === 'Gratis' ? subTotal : subTotal + envio
    const precioConDescuento = precioTotal - (precioTotal / descuento)
    
    return (
        <div className='p-5'>
            <h1 className='text-2xl font-semibold'>Mi Carrito <span className='text-base text-gray-600'>{cart?.length} {cart?.length === 1 ? `Producto` : 'Productos'}</span></h1>
            <div className='py-3'>
                <Link to='/' className='text-violet-800 font-normal hover:underline'>Seguir Comprando</Link>
            </div>
            <div className='flex-col flex md:flex-row gap-3'>
                <section className='w-full md:w-2/3 flex flex-col gap-3'>
                    {cart?.map((producto, index) => (
                        <CartProduct key={index} indice={index} producto={producto}/>
                    ))}
                </section>
                <section className='flex justify-between items-center bg-white flex-col w-full border md:w-1/3 p-3'>
                        <h2 className='text-xl font-semibold text-violet-800 text-center'>Total a Pagar</h2>
                        <div className='w-full flex justify-around'>
                            <p>Subtotal</p>
                            <div className='border-b mb-1 w-1/2 border-dashed border-violet-600'></div>
                            <span className='font-bold'>${subTotal?.toFixed(3)}</span>
                        </div>
                        <div className='w-full flex justify-around'>
                            <p>Costo de Envío</p>
                            <div className='border-b mb-1 w-1/2 border-dashed border-violet-600'></div>
                            <span className='font-bold'>{typeof(envio) === 'number' ? `$${envio.toFixed(3)}` : envio}</span>
                        </div>
                        { descuento > 0 && <div className='w-full flex justify-around'>
                            <p>Descuento</p>
                            <div className='border-b mb-1 w-1/2 border-dashed border-violet-600'></div>
                            <span className='font-bold'>%{descuento}</span>
                        </div>}
                        <div className='w-full flex justify-around'>
                            <p>Total</p>
                            <div className='border-b mb-1 w-1/2 border-dashed border-violet-600'></div>
                            <span className='font-bold'>${descuento > 0 ? (precioConDescuento).toFixed(3) : precioTotal}</span>
                        </div>
                        <button className='w-2/3 bg-violet-600 hover:bg-violet-700 py-2 text-white uppercase font-semibold rounded'>Pagar</button>
                </section>
            </div>
        </div>
  )
}

export default CartProducts