import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";
import { toast } from "react-toastify"
import { useSelector } from "react-redux";

const VITE_API_URL = import.meta.env.VITE_API_URL
const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const PRESET = import.meta.env.VITE_PRESET;

const CreateProducto = () => {

  const categorias = useSelector(state => state.categorias)
  
  const [producto, setProducto] = useState({
    nombre: '',
    imagen: [],
    precio: null,
    color: '',
    descripcion: '',
    categoryId: ''
  })

  const handleChange = (e) => {
    const property = e.target.name
    const value = e.target.value
    setProducto({...producto, [property]: value})
  }

  const handleImageUpload = (event) => {
    const files = event.target.files;
    console.log(files);
    if (files.length > 0) {
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", PRESET);
      console.log(formData);
    
       fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        
        .then((data) => {
          console.log(data);
          setProducto({...producto, imagen: [...producto.imagen, data.secure_url],
          });
        })

        .catch((error) => {
          console.error("Error al subir la imagen a Cloudinary:", error);
        });
    }
  };

  const handlerSubmit = async (e) => {
    e.preventDefault()
    const p = {...producto, precio: parseFloat(producto.precio), categoryId: parseInt(producto.categoryId), talle: {xl: 3, l: 2, xs: 4}}

    try {
      const {data} = await axios.post(`${VITE_API_URL}/productos`, p)
      toast.success(data, {
        position: "bottom-right",  
        autoClose: 2000,
        })
      setProducto({
        nombre: '',
        imagen: [],
        precio: '',
        color: '',
        descripcion: '',
        categoryId: ''
      })
    } catch (error) {
      toast.error(error.response.data.error)
    }
    
  }

  return (
    <div class="flex min-h-screen py-10 items-center justify-center">
      <div class="flex flex-col md:flex-row gap-3">
        <div class="bg-white p-5 relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <h4 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-violet-500 antialiased">
              Ingresa un producto nuevo
            </h4>
            <form class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handlerSubmit}>
            <div class="mb-4 flex flex-col gap-6">
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-violet-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                  onChange={handleChange}
                  value={producto.nombre}
                  name='nombre'
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violet-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violet-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violet-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Nombre
                </label>
              </div>

              {/* Imagen */}
              
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-md border"
                  placeHolder=" "
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  name='imagen'
                  multiple
                />
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-violet-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                  onChange={handleChange}
                  value={producto.precio}
                  name='precio'
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violet-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violet-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violet-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Precio
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-violet-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                  onChange={handleChange}
                  value={producto.color}
                  name='color'
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violet-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violet-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violet-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Color
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-violet-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeHolder=" "
                  onChange={handleChange}
                  value={producto.descripcion}
                  name='descripcion'
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violet-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violet-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violet-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Descripcion
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px]">
                <div>
                  
                  <select 
                    onChange={handleChange}
                    value={producto.categoryId} 
                    name="categoryId" 
                    className="w-full border-gray-200 rounded-md"
                  >
                    <option value=""></option>
                  {categorias?.map(categoria => {
                    return(
                        <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                        )
                      })
                    }
                    </select>
                    
                </div>
              </div>
            </div>
            <button
              class="mt-9 block w-full select-none rounded-lg bg-violet-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-violet-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Crear producto
            </button>
            <p class="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              ¿Quieres volver? {''}
              <Link
                class="font-semibold text-violet-500 transition-colors hover:text-blue-700"
                to="/admin"
              >
                Volver
              </Link>
            </p>
          </form>
        </div>
        {
          producto.imagen.length ? 
          <div className='m-auto flex  md:flex-col flex-row flex-wrap rounded-xl bg-white'>
            {producto.imagen?.map(img=>{
              return(
                  <Image publicId={img} cloudName={CLOUD_NAME} className='p-2 md:p-5 w-32 md:w-36'>
                      <Transformation crop="thumb" />
                  </Image>
              )
            })}
          </div>
        : ''}

      </div>
    </div>
  )
}

export default CreateProducto