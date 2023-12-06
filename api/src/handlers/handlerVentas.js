const {createVenta} = require('../controllers/controllersVentas')

const getVentas = async (req,res) => {

}


const postVenta = async (req,res) => {
    const {productos, descuento, userId} = req.body
    try {
        const venta = await createVenta({productos, descuento, userId})
        res.status(200).json(venta)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


const getVentaById = async (req,res) => {

}


const getVentasByUser = async (req,res) => {

}


const deleteVenta = async (req,res) => {

}

module.exports = {
    getVentas,
    postVenta,
    getVentaById,
    getVentasByUser,
    deleteVenta
}