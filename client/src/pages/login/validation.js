export const validation = (property, value, error, setError) => {

    switch (property) {
        case 'nombre':

            if(value.length  < 2 || value.length > 30){
                return setError({...error, nombre:'El nombre debe tener 2 y 30 caracteres'})
            }else if(/\d/.test(value)) {
                return setError({...error, nombre: 'El nombre no puede contener numeros'})
            } else return setError({...error, nombre: ''})

        case 'email':

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error.email = 'Ingrese una dirección de correo electrónico válida';
        } else return setError({...error, email: ''})

        case 'password':

            if(value < 1 || value > 999) {
               return setError({...error, attack: 'Debes colocar un numero entre 1 y 999'})
            } else return setError({...error, attack: ''})

        case 'repetirPassword':

            if(value < 1 || value > 999) {
               return setError({...error, defense: 'Debes colocar un numero entre 1 y 999'})
            } else return setError({...error, defense: ''})


        case 'celular': 
            if(value.length === 0) {
                setError({...error, types: 'Debes seleccionar al menos un tipo'})
            } else setError({...error, types: ''})
        default:
            break;
    }
}