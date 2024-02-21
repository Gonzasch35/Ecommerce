import axios from "axios";

export const GET_PRODUCTOS = "GET_PRODUCTOS";
export const GET_PRODUCTOS_BY_ID = "GET_PRODUCTOS_BY_ID";
export const GET_CATEGORIAS = "GET_CATEGORIAS";
export const FILTER_PRODUCTOS = "FILTER_PRODUCTOS";
export const AUTH_USER = "AUTH_USER";
export const FIND_PRODUCTO = "FIND_PRODUCTO";
export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";
export const ADD_FAVORITO = "ADD_FAVORITO";
export const CLOSE_SESION = "CLOSE_SESION";

const URL_PRODUCTOS = "/productos";
const URL_CATEGORIAS = "/categorias/";

export const get_productos = () => {
  return async function (dispatch) {
    const { data } = await axios(`${URL_PRODUCTOS}`);
    dispatch({ type: GET_PRODUCTOS, payload: data });
  };
};
export const get_productosById = (id) => {
  return async function (dispatch) {
    const { data } = await axios(`${URL_PRODUCTOS}/${id}`);
    console.log(data);
    dispatch({ type: GET_PRODUCTOS_BY_ID, payload: data });
  };
};
export const get_categorias = () => {
  return async function (dispatch) {
    const { data } = await axios(`${URL_CATEGORIAS}`);
    dispatch({ type: GET_CATEGORIAS, payload: data });
  };
};

export const filter_product = (payload) => {
  console.log(payload);
  return {
    type: FILTER_PRODUCTOS,
    payload,
  };
};

export const findProduct = (nombre) => {
  return async function (dispatch) {
    console.log(nombre);
    try {
      const { data } = await axios(
        `http://localhost:3001/productos/byname?name=${nombre}`
      );

      console.log(data);

      dispatch({ type: FIND_PRODUCTO, payload: data });
    } catch (error) {
      alert("No se encontro el producto");
    }
  };
};

export const autenticarUsuario = (token) => {
  return async function (dispatch) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axios("/users/perfil", config);
      dispatch({ type: AUTH_USER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProductToCard = (id, body) => {
  return async function (dispatch) {
    try {
      const {data} = await axios.put(`/users/cart/${id}`, body)
      console.log(data);
      dispatch({type: ADD_CART, payload: data})
    } catch (error) {
      alert(error)
    }
  }
}

export const deleteProductToCart = (id, indice) => {
  return async function (dispatch) {
    try {
      const {data} = await axios.put(`/users/cart/delete/${id}`, indice)
      dispatch({type: DELETE_CART, payload: data})
    } catch (error) {
      alert(error)
    }
  }
}

export const addFavorito = (id, productoId) => {
  return async function (dispatch) {
    try {
      console.log(productoId);
      const {data} = await axios.put(`/users/favorito/${id}`, productoId)
      dispatch({type: ADD_FAVORITO, payload: data})
    } catch (error) {
      console.log(error);
    }
  }
}

export const closeSesion = () =>{
  return {type: CLOSE_SESION, payload: {}}
}
