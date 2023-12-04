const getVentas = async (req,res) => {

}


const postVenta = async (req,res) => {
    const {productosId} = req.body
    try {
        res.status(200).json(productosId)
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