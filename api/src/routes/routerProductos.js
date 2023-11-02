const { Router } = require("express");
const getProductos = require('../handlers/handlerProductos')

const routerProductos = Router()

routerProductos.get('/', getProductos)

module.exports = routerProductos
