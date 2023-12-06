const sacarFecha = () => {
    const fecha = new Date()
    const año = fecha.getFullYear()
    const mes = fecha.getMonth() + 1
    const dia = fecha.getDate()
    
    return dia + '/' + mes + '/' + año
}

module.exports = sacarFecha