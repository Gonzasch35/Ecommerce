import { Link } from 'react-router-dom'
import basura from '../../assets/eliminar.png'


const CartProduct = ({producto}) => {
  return (
    <div className='p-4 border'>
        <div className='flex justify-between'>
            <h1 className='font-semibold'>{producto.nombre}</h1>
            <Link>
                <img className='hover:scale-110' src={basura} width='30' alt={basura} />
            </Link>
        </div>
        <div className='flex justify-between w-4/5'>
            <img src={producto.imagen} width='100' height='100' alt={producto.nombre} />
            <div className='flex flex-col gap-3'>
                <p>Talle: <span className='uppercase font-semibold text-violet-800'>{Object.keys(producto.talle)[0]}</span></p>
                <Link>Editar Producto</Link>
            </div>
            <div className='text-center'>
                <p>Cantidad</p>
                <span className='font-semibold text-violet-800 text-xl'>{Object.values(producto.talle)[0]}</span>
            </div>
            <div className='text-center'>
                <p>Total</p>
                <span className='font-semibold text-violet-800 text-xl'>{producto.precio}</span>
            </div>
        </div>
    </div>
  )
}

export default CartProduct