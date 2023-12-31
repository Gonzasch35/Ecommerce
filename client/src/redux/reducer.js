import {
  GET_PRODUCTOS,
  GET_CATEGORIAS,
  FILTER_PRODUCTOS,
  GET_PRODUCTOS_BY_ID,
  AUTH_USER,
  FIND_PRODUCTO,
  ADD_CART,
  DELETE_CART,
  ADD_FAVORITO
} from "./actions";

let initialState = {
  productos: [],
  allProducts: [],
  detailProduct: {},
  categorias: [],
  user: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
        allProducts: action.payload,
      };
    case GET_CATEGORIAS:
      return { ...state, categorias: action.payload };
    case FILTER_PRODUCTOS:
      let produc = [...state.allProducts];
      const filtro = state.allProducts.filter(
        (producto) => producto.categoryId === action.payload
      );
      return { ...state, productos: filtro };
    case FIND_PRODUCTO:
      return { ...state, productos: action.payload };
    case GET_PRODUCTOS_BY_ID:
      return { ...state, detailProduct: action.payload };
    case AUTH_USER:
      return { ...state, user: action.payload };
    case ADD_CART:
      return {...state, user: {...state.user, cart: action.payload}}
    case DELETE_CART:
      return {...state, user: {...state.user, cart: action.payload}}
    case ADD_FAVORITO:
      return {...state, user: {...state.user, productos: action.payload}}
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
