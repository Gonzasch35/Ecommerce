import { GET_PRODUCTOS, GET_CATEGORIAS, FILTER_PRODUCTOS, GET_PRODUCTOS_BY_ID } from "./actions"

let initialState = {
    productos: [],
    allProducts: [],
    detailProduct: {},
    categorias: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTOS:
            return{ ...state, productos: action.payload, allProducts: action.payload}
        case GET_CATEGORIAS:
            return{...state, categorias: action.payload}
        case FILTER_PRODUCTOS:
            let produc = [...state.allProducts]
            const filtro = state.allProducts.filter(producto => producto.categoryId === action.payload)
            return{...state, productos: filtro}
        case GET_PRODUCTOS_BY_ID:
            console.log(action.payload);
            return{...state, detailProduct: action.payload}
        default:
            return{
                ...state
            }
    }
}

export default rootReducer