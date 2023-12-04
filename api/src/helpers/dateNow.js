const dateNow = () => {
    const fecha = new Date()
    const año = fecha.getFullYear()
    const mes = fecha.getMonth() + 1
    const dia = fecha.getDate()
    
    return dia + '/' + mes + '/' + año
}

console.log(dateNow());