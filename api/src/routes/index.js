const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerProductos = require('./routerProductos')
const routerCategorias = require('./routerCategorias')
const routerUser = require('./routerUser')
const routerVentas = require('./routerVentas')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/productos', routerProductos)
router.use('/categorias', routerCategorias)
router.use('/users', routerUser)
router.use('/venta', routerVentas)


module.exports = router;
