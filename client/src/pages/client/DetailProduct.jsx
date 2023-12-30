import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { get_productosById } from '../../redux/actions';
import PrevIcon from '../../components/icons/PrevIcon';
import NextIcon from '../../components/icons/NextIcon';



const DetailProduct = () => {


    const navigate = useNavigate()
    const producto = useSelector(store=>store.detailProduct)
    const {nombre, imagen, precio, talle, color, stock, descripcion, categoryId} = producto
    const {id} = useParams()
    const dispatch = useDispatch()
    const [imgIndex, setImgIndex] = useState(0)
    const [selectedTalle, setSelectedTalle] = useState('')
    console.log(talle);

    const talles = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']

    useEffect(() => {
        dispatch(get_productosById(id))
    }, [id])
    
    const handleClickPrev = () => { 
        if(imgIndex === 0) return setImgIndex(imagen.length - 1)
        setImgIndex(imgIndex - 1)
    }
    const handleClickNext = () => {
        if(imgIndex === imagen.length - 1) return setImgIndex(0)
        setImgIndex(imgIndex + 1)
    }

    const handleClickImage = (index) =>{
        setImgIndex(index)
    }
    const handleClickTalle = (index) => {
        if(index === selectedTalle) setSelectedTalle('')
        else setSelectedTalle(index)
    }
    const handleClickAddCart = (e) => {
        e.preventDefault()
        localStorage.getItem('cart')
    }

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 mt-10 relative'>
        <button onClick={()=>navigate('/')} className='absolute top-0 z-10 left-5'>Volver</button>
        <section className='grid md:grid-cols-1 md:gap-4'>
            <div className='relative col-span-1'>
                {imagen && <img src={imagen[imgIndex]} className='rounded-3xl' />}
                <div className='absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-5'>
                    <button onClick={handleClickPrev} className='bg-violet-400 w-10 h-10 rounded-full grid place-items-center'>
                        <PrevIcon />
                    </button>
                    <button onClick={handleClickNext} className='bg-violet-400 w-10 h-10 rounded-full grid place-items-center'>
                        <NextIcon />
                    </button>
                </div>
            </div>
            <div className='flex gap-1 w-full justify-center items-center'>
                {imagen?.map((img, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => handleClickImage(index)}
                            className={(index === imgIndex ? 'active bg-violet-800 rounded-full w-4 h-4' : 'bg-gray-400 rounded-full w-4 h-4')} 
                        >
                        </button>
                    )
                })}
            </div>
        </section>
        <section className='container mx-auto px-4 py-4'>
            <h1 className='font-bold text-xl mb-4'>{nombre}</h1>
            <p className='mb-3'>{descripcion}</p>
            <p className='font-bold text-xl text-violet-700 mb-4'>
                <span>${precio}</span>
            </p>
            <div className='flex flex-col'>
                <p className=''>Talle</p>
                <div className='flex gap-3 py-2 md:w-1/2'>
                    {talle && talles?.map((t, index) => (
                        <button key={t} onClick={()=>handleClickTalle(index)} className={`border rounded-full p-2 w-full text-center uppercase ${
                            t in talle
                                ? selectedTalle === index
                                    ? 'bg-violet-500 text-white' // Cambia estos estilos según tus necesidades
                                    : 'border-black text-black'
                                : 'border-gray-300 text-gray-300'
                        }`} disabled={!(t in talle)}>
                            {t}
                        </button>
                    ))}
                </div>
            </div>
            <div className='my-4'>
                <button onClick={handleClickAddCart} className='w-1/2 bg-violet-500 text-white font-bold uppercase py-2 rounded-xl hover:bg-violet-700'>Agregar al carrito</button>
            </div>
        </section>
    </main>
  )
}

export default DetailProduct