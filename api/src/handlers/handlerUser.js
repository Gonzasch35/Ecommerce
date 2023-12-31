const {User, Producto} = require('../db')
const {emailRegistro, recuperarPass} = require('../helpers/email')
const generarId = require('../helpers/generarId')
const generateJWT = require('../helpers/generateJWT')
const {addProducto, deleteToCart} = require('../controllers/controllerUser')

const getAllUsers = async (req,res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email', 'phone', 'admin', 'token', 'cart', 'productos'],
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
        if(findOne) throw Error('Ya existe una cuenta con ese email')
        const token = generarId()

    
        const user = await User.create({name, email, password, phone, address, token})
        
        emailRegistro({
            email: user.email,
            name: user.name,
            token: user.token
        })
        
        res.status(200).json('Usuario creado con exito')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateUser = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(400).json({error: error.message})
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
        res.status(400).json({error: error.message})
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
                phone: user.phone,
                token: generateJWT(user.id)
            })
        } else throw Error('Contraseña Incorrecta')


    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const addFavorito = async (req, res) => {
    const {id} = req.params
    const {productoId} = req.body
    try {
        const usuario = await User.findByPk(id,{
            include: [
              {
                model: Producto,
              },
            ],
          })
        if(!usuario) throw Error('No existe el usuario')

        const findProducto = await Producto.findByPk(productoId)
        if(!findProducto) throw Error('No existe el producto')

        const add = await usuario.addProductos(findProducto)
        if(!add) {
            await usuario.removeProductos(findProducto)
            res.status(200).json(usuario.productos)
        } else {
            res.status(200).json(usuario.productos)
        }


    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const addProductToCart = async (req,res) => {
    const {id} = req.params
    const {talle, productoId} = req.body
    try {
        const add = await addProducto(id, talle, productoId)

        res.status(200).json(add.cart)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteProductToCart = async (req,res) => {
    const {id} = req.params
    const {indice} = req.body
    try {
        const user = await deleteToCart(id, indice)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const confirmUser = async (req,res) => {
    const {token} = req.params
    try {
        const userConfirm = await User.findOne({where: {token: token}})
        if(!userConfirm) throw Error('Token no válido')

        userConfirm.confirm = true
        userConfirm.token = ''
        await userConfirm.save()

        res.status(200).json('Usuario confirmado correctamente')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const cambiarPassword = async (req, res) => {
    const {email} = req.body
    try {
        const user = await User.findOne({where: {email: email}})
        // Confirmar si el usuario existe
        if(!user) throw Error('Email incorrecto')
        
        user.token = generarId()
        await user.save()

        recuperarPass({
            name: user.name,
            email: user.email,
            token: user.token
        })

        res.status(200).json('Se te ha enviado un email con instrucciones')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const restartPassword = async (req,res) => {
    const { token } = req.params
    try {
        const tokenConfirm = await User.findOne({where: {token: token}})
        if(!tokenConfirm) throw Error('Token no válido')

        res.status(200).json('Token válido')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const newPassword = async (req,res) => {
    const { token } = req.params
    const {password} = req.body
    try {
        const user = await User.findOne({where: {token: token}})
        if(!user) throw Error('Token no válido')

        user.password = password
        user.token = ''
        await user.save()

        res.status(200).json('Contraseña actualizada')
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const perfil = async (req, res) => {
    const {usuario} = req
    try {
        res.status(200).json(usuario)
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
    addFavorito,
    confirmUser,
    cambiarPassword,
    restartPassword,
    newPassword,
    perfil,
    addProductToCart,
    deleteProductToCart
}