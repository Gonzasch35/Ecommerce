import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { get_productosById } from '../../redux/actions';
import PrevIcon from '../../components/icons/PrevIcon';
import NextIcon from '../../components/icons/NextIcon';
import image2 from '../../assets/imagen2.png'
import image3 from '../../assets/imagen3.png'
import image4 from '../../assets/imagen4.png'



const DetailProduct = () => {
    
    const producto = useSelector(store=>store.detailProduct)
    const {nombre, imagen, precio, talle, color, stock, descripcion, categoryId} = producto
    const {id} = useParams()
    const dispatch = useDispatch()
    const [imgIndex, setImgIndex] = useState(0)

    const imagenes = [imagen, image2, image3, image4]
    const talles = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl']

    useEffect(() => {
        dispatch(get_productosById(id))
    }, [])
    
    const handleClickPrev = () => { 
        if(imgIndex === 0) return setImgIndex(imagenes.length - 1)
        setImgIndex(imgIndex - 1)
    }
    const handleClickNext = () => {
        if(imgIndex === imagenes.length - 1) return setImgIndex(0)
        setImgIndex(imgIndex + 1)
    }

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 '>
        <section className='grid md:grid-cols-4 md:gap-4'>
            <div className='relative col-span-4'>
                <img src={imagenes[imgIndex]} className='rounded-3xl' />
                <div className='absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-5'>
                    <button onClick={handleClickPrev} className='bg-black w-10 h-10 rounded-full grid place-items-center'>
                        <PrevIcon />
                    </button>
                    <button onClick={handleClickNext} className='bg-black w-10 h-10 rounded-full grid place-items-center'>
                        <NextIcon />
                    </button>
                </div>
            </div>
            {imagenes?.map(img => {
                return (
                    <img className='w-32 hidden md:block' src={img} alt="" />
                )
            })}
            {/* <img className='w-32 hidden md:block' src={imagen} alt="" />
            <img className='w-32 hidden md:block' src={imagen} alt="" />
            <img className='w-32 hidden md:block' src={imagen} alt="" /> */}
        </section>
        <section className='container mx-auto px-4 py-4'>
            <h1 className='font-bold text-xl mb-4'>{nombre}</h1>
            <p className='mb-3'>{descripcion}</p>
            <p className='font-bold text-xl text-violet-700'>
                <span>${precio}</span>
            </p>
            <div className='flex gap-3 py-2'>
                {talle && talles?.map(t => (
                    <button key={t} className={t in talle ? 'border border-black rounded-full p-2 w-full text-center uppercase' : 'border border-gray-300 rounded-full p-2 w-full text-center text-gray-300 uppercase'} disabled={!t in talle}>
                        {t}
                    </button>
                ))}
            </div>
        </section>




    {/* <div className='flex h-52 flex-row'>
        <div className=''>
            <img src={imagen} alt="" />
        </div>
        <div className='flex flex-col gap-10'>
            <h2>{nombre}</h2>
            <p>{precio}</p>
            </div>
        </div> */}
    </main>
  )
}

export default DetailProduct