const jwt = require('jsonwebtoken')
const {User} = require('../db')

const checkAuth = async (req, res, next) => {
    
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decoded);
            
            req.usuario = await User.findByPk(decoded.id,{
                attributes: ['id', 'name', 'email', 'phone', 'admin', 'cart']})
            console.log(req.usuario);
            if(!req.usuario) {
                throw Error('No se encontro al usuario')
            }
        return next()
        } catch (error) {
            res.status(400).json({error: 'Hubo un error'})
        }
    }
    if(!token) {
        const error = new Error('Token no válido')
        res.status(404).json({error: error.message})
    }
    
    next()
}
module.exports = checkAuth