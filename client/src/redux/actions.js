import axios from "axios";

export const GET_PRODUCTOS = 'GET_PRODUCTOS'
export const GET_PRODUCTOS_BY_ID = 'GET_PRODUCTOS_BY_ID'
export const GET_CATEGORIAS = 'GET_CATEGORIAS'
export const FILTER_PRODUCTOS = 'FILTER_PRODUCTOS'

const URL_PRODUCTOS = '/productos/'
const URL_CATEGORIAS = '/categorias/'

export const get_productos = () => {
    return async function(dispatch) {
        const {data} = await axios(`${URL_PRODUCTOS}`)
        dispatch({type: GET_PRODUCTOS, payload: data})
    }
}
export const get_productosById = (id) => {
    return async function(dispatch) {
        const {data} = await axios(`${URL_PRODUCTOS}/${id}`)
        dispatch({type: GET_PRODUCTOS_BY_ID, payload: data})
    }
}
export const get_categorias = () => {
    return async function(dispatch) {
        const {data} = await axios(`${URL_CATEGORIAS}`)
        dispatch({type: GET_CATEGORIAS, payload: data})
    }
}

export const filter_product = (payload) => {
    return {
        type: FILTER_PRODUCTOS,
        payload
    }
}