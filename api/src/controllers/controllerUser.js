const {User, Producto} = require('../db')

const addProducto = async (id, talle, productoId) => {
        const user = await User.findByPk(id)
        if(!user) throw Error('No existe el usuario')

        const findProducto = await Producto.findByPk(productoId)
        if(!findProducto) throw Error('No existe el producto')

        
        const producto = {
            id: findProducto.id,
            nombre: findProducto.nombre,
            imagen: findProducto.imagen[0],
            talle: {[talle]: 1},
            precio: parseFloat(findProducto.precio),
            color: findProducto.color,
        }
        if(!user.cart) {
            user.cart = []
            user.cart.push(producto)
            await user.save()
        } else {
                user.cart = [...user.cart, producto]
                await user.save()
        }
        
        
        return user
}

module.exports = {
    addProducto
}