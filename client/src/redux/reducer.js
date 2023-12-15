import { GET_PRODUCTOS, GET_CATEGORIAS } from "./actions"

let initialState = {
    productos: [],
    categorias: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTOS:
            return{ ...state, productos: action.payload}
        case GET_CATEGORIAS:
            return{...state, categorias: action.payload}
        default:
            return{
                ...state
            }
    }
}

export default rootReducer