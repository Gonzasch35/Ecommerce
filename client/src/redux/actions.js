import axios from "axios";

export const GET_PRODUCTOS = 'GET_PRODUCTOS'

const URL_PRODUCTOS = '/productos/'

export const get_productos = () => {
    return async function(dispatch) {
        const {data} = await axios(`${URL_PRODUCTOS}`)
        dispatch({type: GET_PRODUCTOS, payload: data})
    }
}