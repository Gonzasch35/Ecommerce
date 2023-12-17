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
        const {nombre, imagen, precio, talle, color, descripcion, genero, categoryId} = req.body
        let stock = 0 
        for (let key in talle) {
            if (talle.hasOwnProperty(key)) {
              stock += talle[key];
            }
        }
        const producto = await Producto.findOrCreate({where: {nombre: nombre}, defaults:{ nombre, imagen, precio, talle, color, descripcion, genero, stock, categoryId}})
        if(!producto) throw Error('Producto no creado')
        res.status(200).json('Producto creado')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateProducto = async (req, res) => {
    const {id} = req.params
    const {nombre, imagen, precio, talle, color, descripcion, genero, stock, categoryId} = req.body
    try {
        const findProducto = await Producto.findByPk(id)
        if(!findProducto) throw Error('No se encontro el producto!')

        findProducto.nombre = nombre || findProducto.nombre
        findProducto.imagen = imagen || findProducto.imagen
        findProducto.precio = precio || findProducto.precio
        findProducto.talle = talle || findProducto.talle
        findProducto.color = color || findProducto.color
        findProducto.descripcion = descripcion || findProducto.descripcion
        findProducto.genero = genero || findProducto.genero
        findProducto.stock = stock || findProducto.stock
        findProducto.categoryId = categoryId || findProducto.categoryId

        await findProducto.save()
        
        res.status(200).json('Producto editado')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteProducto = async (req, res) => {
    const {id} = req.params
    try {
        const deleteProducto = await Producto.destroy({
            where: {
              id: id,
            },
        })
        if(!deleteProducto) throw Error('El producto no existe')
        res.status(200).json('Producto borrado')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getProductos,
    postProducto,
    updateProducto,
    deleteProducto
}