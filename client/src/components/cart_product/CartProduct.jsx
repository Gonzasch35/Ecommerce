import { Link } from 'react-router-dom'
import basura from '../../assets/eliminar.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductToCart } from '../../redux/actions'
import HeartIcon from '../icons/HeartIcon'


const CartProduct = ({producto, indice}) => {
    const {cart, id} = useSelector(state=>state.user)
    const dispatch = useDispatch()


    const handleClickDelete = (indice) => {
        dispatch(deleteProductToCart(id, {indice: indice}))
    }

  return (
    <div className='p-4 border bg-white'>
        <div className='flex justify-between'>
            <h1 className='font-semibold'>{producto.nombre}</h1>
            <button onClick={()=>handleClickDelete(indice)}>
                <img className='hover:scale-105' src={basura} width='30' alt={basura} />
            </button>
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
                <span className='font-semibold text-violet-800 text-xl'>${producto.precio}</span>
            </div>
        </div>
    </div>
  )
}

export default CartProduct