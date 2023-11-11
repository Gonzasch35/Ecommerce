const {Router} = require('express')
const {getAllUsers, postUser, getUser, updateUser, deleteUser, loginUser} = require('../handlers/handlerUser')

const routerUser = Router()

routerUser.get('/', getAllUsers)
routerUser.post('/', postUser)
routerUser.post('/login', loginUser)
routerUser.put('/', updateUser)
routerUser.get('/:id', getUser)
routerUser.delete('/:id', deleteUser)

module.exports = routerUser