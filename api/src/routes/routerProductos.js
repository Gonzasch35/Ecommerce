const { Router } = require("express");
const {getProductos, postProducto, updateProducto} = require('../handlers/handlerProductos')

const routerProductos = Router()

routerProductos.get('/', getProductos)
routerProductos.post('/', postProducto)
routerProductos.put('/:id', updateProducto)

module.exports = routerProductos
