const { Router } = require("express");
const {getProductos, postProducto} = require('../handlers/handlerProductos')

const routerProductos = Router()

routerProductos.get('/', getProductos)
routerProductos.post('/', postProducto)

module.exports = routerProductos
