const {Router} = require('express')
const {getAllUsers, postUser, getUser, updateUser, deleteUser, loginUser, addFavorito, confirmUser, cambiarPassword, restartPassword, newPassword, perfil} = require('../handlers/handlerUser')
const checkAuth = require('../middleware/checkAuth')

const routerUser = Router()

routerUser.get('/', getAllUsers)
routerUser.get('/confirm/:token', confirmUser)
routerUser.post('/', postUser)
routerUser.post('/login', loginUser)

routerUser.post('/change-password', cambiarPassword)
routerUser.route('/change-password/:token').get(restartPassword).post(newPassword)

routerUser.get('/perfil', checkAuth, perfil)

routerUser.put('/', updateUser)
routerUser.get('/:id', getUser)
routerUser.delete('/:id', deleteUser)

routerUser.put('/favorito/:id', addFavorito)


module.exports = routerUser