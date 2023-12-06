const {User, Producto} = require('../db')
const generarId = require('../helpers/generarId')

const getAllUsers = async (req,res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email', 'phone', 'admin'],
            include: [
                {
                  model: Producto,
                }
              ]
        })
        if(!users) throw Error('No hay usuarios registrados')
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postUser = async (req,res) => {
    const {name, email, password, phone, address} = req.body
    try {
        const findOne = await User.findOne({where: {email}})
        if(findOne) throw Error('El email ingresado ya esta registrado')
        const token = generarId()
        await User.create({name, email, password, phone, address, token})
        res.status(200).json('Usuario creado con exito')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateUser = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const getUser = async (req,res) => {
    const {id} = req.params
    try {
        const findUser = await User.findByPk(id, {
            include: [
                {
                  model: Producto,
                }
              ]
        })
        if(!findUser) throw Error('No existe el usuario con ese id')
        res.status(200).json(findUser)
    } catch (error) {
        
    }
}

const deleteUser = async (req,res) => {
    const {id} = req.param
    try {
        
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({where: {email: email}})
        // Confirmar si el usuario existe
        if(!user) throw Error('Email incorrecto')

        // Comprobar si el usuario esta confirmado
        // if(!user.confirm) throw Error('La cuenta no esta confirmado')

        // Comprobar su password
        if(await user.comparePassword(password)) {
            res.status(200).json({
                id: user.id,
                name: user.name,
                email: user.email,
                admin: user.admin,
                phone: user.phone
            })
        } else throw Error('El password es incorrecto')


    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const addFavorito = async (req, res) => {
    const {id} = req.params
    const {productoId} = req.body
    try {
        const usuario = await User.findByPk(id)
        if(!usuario) throw Error('No existe el usuario')

        const findProducto = await Producto.findByPk(productoId)
        if(!findProducto) throw Error('No existe el producto')

        const add = await usuario.addProductos(findProducto)
        if(!add) {
            await usuario.removeProductos(findProducto)
            res.status(200).json('Producto eliminado de favoritos')
        } else {
            res.status(200).json('Producto agregado a favoritos')
        }


    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getAllUsers,
    postUser,
    updateUser,
    getUser,
    deleteUser,
    loginUser,
    addFavorito
}