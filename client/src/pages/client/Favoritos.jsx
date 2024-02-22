import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import basura from "../../assets/eliminar.png";
import { addFavorito } from "../../redux/actions";

const Favoritos = () => {
  const user = useSelector((state) => state.user);
  const favorites = user.productos;
  console.log(favorites);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleDeleteFav = async (id) => {
    setLoading(true); // Mostrar loader al hacer clic en el botón de eliminar
    try {
      await dispatch(addFavorito(user.id, { productoId: id }));
      setLoading(false); // Ocultar loader una vez completada la operación
    } catch (error) {
      console.error("Error al eliminar el favorito:", error);
      setLoading(false); // En caso de error, asegurarse de ocultar el loader
    }
  };

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
              <div
                key={producto.id}
                className="bg-white w-3/4 my-16 mx-auto border-2 border-gray-300 p-10 relative"
              >
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
                <button onClick={() => handleDeleteFav(producto.id)}>
                  {loading ? (
                    <div className="absolute top-5 right-5">Loading...</div>
                  ) : (
                    <img
                      className="absolute top-5 right-5 hover:scale-110"
                      src={basura}
                      alt={basura}
                      width="25"
                    />
                  )}
                </button>
              </div>
            );
          })
        : "Tu lista de Favoritos está vacía."}
    </div>
  );
};

export default Favoritos;
