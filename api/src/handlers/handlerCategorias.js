const {Category} = require('../db')

const getCategorias = async(req,res) => {
    try {
        const categorias = await Category.findAll()
        if(!categorias) throw Error('No se encontraron categorias')
        categorias.sort((a, b) => a.name.localeCompare(b.name));
        res.status(200).json(categorias)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postCategoria = async(req,res) => {
    try {
        const {name} = req.body
        const categoria = await Category.findOrCreate({where: {name}, 
        defaults: {
            name
        }})
        if(!categoria) throw Error('Error al crear la categoria')
        res.status(200).json(categoria)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getCategorias,
    postCategoria
}