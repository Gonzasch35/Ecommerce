const {Router} = require('express')
const {getAllUsers, postUser, getUser, updateUser, deleteUser, loginUser, addFavorito, confirmUser, cambiarPassword} = require('../handlers/handlerUser')

const routerUser = Router()

routerUser.get('/', getAllUsers)
routerUser.get('/confirm/:token', confirmUser)
routerUser.post('/', postUser)
routerUser.post('/login', loginUser)
routerUser.post('/change-password', cambiarPassword)
routerUser.put('/', updateUser)
routerUser.get('/:id', getUser)
routerUser.delete('/:id', deleteUser)

routerUser.put('/favorito/:id', addFavorito)

module.exports = routerUser