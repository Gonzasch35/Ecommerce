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

const deleteToCart = async (id, indice) => {
    const user = await User.findByPk(id)
    if(!user) throw Error('No existe el usuario')

        user.cart = await user.cart.filter((producto, index)=> index !== indice)
        user.save()

    return user.cart
}

module.exports = {
    addProducto,
    deleteToCart
}