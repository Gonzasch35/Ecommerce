import React from 'react'

const Producto = ({producto}) => {
    console.log(producto);
  return (
    <div>
        <div class="mx-auto px-5">
            <div class="max-w-xs cursor-pointer rounded-lg bg-white p-3 shadow duration-150 hover:scale-105 hover:shadow-md">
                <img class="w-full rounded-lg object-cover object-center" src={producto?.imagen} alt="product" />
                <p class="my-4 pl-4 font-bold text-gray-500">{producto?.nombre}</p>
                <p class="mb-4 ml-4 text-xl font-semibold text-gray-800">${producto.precio}</p>
            </div>
        </div>
    </div>
  )
}

export default Producto