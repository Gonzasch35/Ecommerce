const axios = require('axios')

const getProductos = async (req, res) => {
    try {
        const productos = await axios.get('https://fakestoreapi.com/products')
        
        if(!productos) {
            throw Error('No se encontraron productos')
        }
        res.status(200).json(productos.data)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postProducto = async (req, res) => {
    try {
        const {nombre, imagen, precio, talle, color, categoria, descripcion} = req.body
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = getProductos