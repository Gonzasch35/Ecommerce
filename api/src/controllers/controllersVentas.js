const {Producto, Venta} = require('../db')
const sacarFecha = require('../helpers/dateNow')

const createVenta = async ({productos, descuento, userId}) => {
    const productosVenta = []
    let total = 0
    const fecha = sacarFecha()
    for (let i = 0; i < productos.length; i++) {
        const pro = await Producto.findByPk(productos[i].productoId)
        const infoProducto = {
            productoId: pro.id,
            producto: pro.nombre,
            imagen: pro.imagen,
            precio: pro.precio,
            talle: productos[i].talle
        }
        const cantidad = pro.talle[productos[i].talle]
        pro.talle[productos[i].talle] = await cantidad - 1
        console.log(pro.talle[productos[i].talle] -= 1);
        await pro.save()
        productosVenta.push(infoProducto)
        total += pro.precio
    }
    const venta = await Venta.create({total, userId, fecha})
    productosVenta.forEach(async element => {
        await venta.addProductos(element.productoId)
    });

    return venta
}


module.exports = {
    createVenta
}