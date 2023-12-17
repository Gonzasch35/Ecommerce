import { GET_PRODUCTOS, GET_CATEGORIAS, FILTER_PRODUCTOS } from "./actions"

let initialState = {
    productos: [],
    allProducts: [],
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
        default:
            return{
                ...state
            }
    }
}

export default rootReducer