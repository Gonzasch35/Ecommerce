const axios = require('axios')
const {Producto} = require('../db')

const getProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll()
        
        if(!productos) {
            throw Error('No se encontraron productos')
        }
        res.status(200).json(productos)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postProducto = async (req, res) => {
    try {
        const {nombre, imagen, precio, talle, color, categoria, descripcion} = req.body
        const producto = await Producto.create({ nombre, imagen, precio, talle, color, categoria, descripcion})
        if(!producto) throw Error('Producto no creado')
        res.status(200).json({message: 'Producto creado'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getProductos,
    postProducto,
}