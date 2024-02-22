import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import basura from "../../assets/eliminar.png";

const Favoritos = () => {
  const user = useSelector((state) => state.user);
  const favorites = user.productos;
  console.log(favorites);

  return (
    <div className="m-auto p-10">
      <Link to="/" className="">
        Volver
      </Link>

      <div className="flex gap-3 items-end my-5">
        <h1 className="text-4xl">Mis Favoritos</h1>
        <h2>{favorites?.length + " Productos"}</h2>
      </div>

      {favorites?.length
        ? favorites?.map((producto) => {
            return (
              <div className="bg-white w-3/4 my-16 mx-auto border-2 border-gray-300 p-10 relative">
                <div className="flex flex-row justify-around items-center">
                  <div className="w-40">
                    <img className="" src={producto.imagen[0]} alt="" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1>{producto.nombre}</h1>
                    {producto.stock > 0 ? "En Stock" : "No hay Stock"}
                  </div>
                  <div>
                    <h4>Total</h4>
                    <h4>{producto.precio}</h4>
                  </div>
                </div>
                <img
                  className="absolute top-5 right-5"
                  src={basura}
                  alt={basura}
                  width="25"
                />
              </div>
            );
          })
        : "Tu lista de Favoritos está vacía."}
    </div>
  );
};

export default Favoritos;
