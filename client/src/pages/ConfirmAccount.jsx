import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"

const ConfirmAccount = () => {

    const [alerta, setAlerta] = useState({})
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

    const params = useParams()
    const {token} = params

    useEffect(() => {
      const confirmarCuenta = async () => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/users/confirm/${token}`
            const {data} = await axios(url)

            setCuentaConfirmada(true)
        } catch (error) {
            setAlerta({
                msg: error.response.data.error,
                error: true
            })
        }
      }
      confirmarCuenta()
    }, [])

    const {msg} = alerta
    
    return (
        <div className="flex flex-col gap-5 min-h-screen text-center items-center justify-center">
                {!cuentaConfirmada    ?   
                        <h1 className="text-amber-600 font-black text-5xl">Error al Confirmar la Cuenta<br />
                            <span className="text-neutral-200">Prueba Iniciar Sesión o Crea Una Nueva</span>
                        </h1>
                        :
                        <h1 className="text-amber-600 font-black text-5xl capitalize">Cuenta confirmada<br />
                            <span className="text-neutral-200">ya puedes ingresar con tus datos</span>
                        </h1>}
                <Link
                    class="mt-6 block select-none rounded-lg bg-violet-500 hover:bg-violet-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-violet-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    to='/'
                >
                    Iniciar Sesión
                </Link>
        </div>
  )
}

export default ConfirmAccount