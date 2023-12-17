const { Router } = require("express");
const {getProductos, postProducto, updateProducto, deleteProducto, getProductoById} = require('../handlers/handlerProductos')

const routerProductos = Router()

routerProductos.get('/', getProductos)
routerProductos.get('/:id', getProductoById)
routerProductos.post('/', postProducto)
routerProductos.put('/:id', updateProducto)
routerProductos.delete('/:id', deleteProducto)

module.exports = routerProductos
