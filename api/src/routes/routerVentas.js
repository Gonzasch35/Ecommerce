const {Router} = require('express')

const { getVentas,
        postVenta,
        getVentaById,
        getVentasByUser,
        deleteVenta} = require('../handlers/handlerVentas')

const routerVentas = Router()

routerVentas.get('/', getVentas)
routerVentas.post('/', postVenta)
routerVentas.get('/:id', getVentaById)
routerVentas.get('/user/:id', getVentasByUser)
routerVentas.delete('/:id', deleteVenta)

module.exports = routerVentas