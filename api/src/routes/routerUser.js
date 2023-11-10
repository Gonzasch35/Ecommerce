const {Router} = require('express')
const {getAllUsers, postUser, getUser, updateUser, deleteUser} = require('../handlers/handlerUser')

const routerUser = Router()

routerUser.get('/', getAllUsers)
routerUser.post('/', postUser)
routerUser.put('/', updateUser)
routerUser.get('/:id', getUser)
routerUser.delete('/:id', deleteUser)

module.exports = routerUser