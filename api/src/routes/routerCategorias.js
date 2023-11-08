const {Router} = require('express')
const {getCategorias, postCategoria} = require('../handlers/handlerCategorias')

const routerCategorias = Router()

routerCategorias.get('/', getCategorias)
routerCategorias.post('/', postCategoria)

module.exports = routerCategorias