import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

const VITE_API_URL = import.meta.env.VITE_API_URL



const ForgotPass = () => {

    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        const value = e.target.value

        setEmail(value)
        
    }

    const handlerSubmit = async (e) => {
        e.preventDefault()

        try {
            const {data} = await axios.post(`${VITE_API_URL}/users/change-password`, {email: email})
            setEmail('')
            toast.success(data, {
                position: "bottom-right",
                autoClose: 2000,
            })
        } catch (error) {
            toast.error(error.response.data.error, {
                position: "bottom-right",
                autoClose: 2000,
            })
        }
    }

  return (
    <div class="flex min-h-screen items-center justify-center">
      <div class="bg-white p-5 relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <h4 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-violet-500 antialiased">
          Olvidaste tu Contraseña
        </h4>
        <p class="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Ingresa tu email para recuperar tu contraseña
        </p>
        <form class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" type="submit" onSubmit={handlerSubmit}>
          <div class="mb-4 flex flex-col gap-6">
            <div class="relative h-11 w-full min-w-[200px]">
              <input
                class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-violet-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
                onChange={handleChange}
                value={email}
                name='email'
              />
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violet-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violet-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violet-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
          </div>
          <button
            class="mt-6 block w-full select-none rounded-lg bg-violet-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-violet-500/20 transition-all hover:shadow-lg hover:shadow-violet-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true"
          >
            Restablecer Contraseña
          </button>
          <p class="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            ¿Quieres volver al inicio? {''}
            <Link
              class="font-semibold text-violet-500 transition-colors hover:text-blue-700"
              to="/"
            >
              Volver
            </Link>
          </p>
        </form>
      </div>
</div>
  )
}

export default ForgotPass