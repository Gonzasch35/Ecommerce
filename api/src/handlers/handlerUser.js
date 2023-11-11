const {User} = require('../db')

const getAllUsers = async (req,res) => {
    try {
        const users = await User.findAll()
        if(!users) throw Error('No hay usuarios registrados')
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postUser = async (req,res) => {
    const {name, email, password, phone, address} = req.body
    try {
        const findOne = await User.findAll({where: {email}})
        if(findOne) throw Error('El email ingresado ya esta registrado')
        await User.create({name, email, password, phone, address})
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
    try {
        
    } catch (error) {
        
    }
}

const deleteUser = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    getAllUsers,
    postUser,
    updateUser,
    getUser,
    deleteUser
}