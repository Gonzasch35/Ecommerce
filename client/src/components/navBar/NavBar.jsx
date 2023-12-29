import 'flowbite';
import logo from '../../assets/breaking_bad.png'
import { filter_product } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import heart from '../../assets/heart.png';
import { Link } from 'react-router-dom';

const NavBar = ({categorias}) => {

  const user = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  const handleClick = (id) => {
    dispatch(filter_product(id))
  }

  return (
    <nav class="bg-gray-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">Indumentaria</span>
        </a>
        <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:w-auto md:flex md:flex-row md:items-center" id="navbar-multi-level">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent md:text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Inicio</Link>
            </li>
            <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Categorías<svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownNavbar" class="z-10 hidden font-normal bg-gray-900 divide-y divide-gray-100 rounded-lg  shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                      {categorias?.map(categoria=> {
                        return(
                          <li key={categoria.id}>
                            <Link onClick={()=> handleClick(categoria.id)} to={`/categoria/${categoria.id}`} class="block px-4 text-white py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white">{categoria.name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                </div>
            </li>
            <li>
              <a href="/" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="/" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Favoritos</a>
            </li>
          </ul>
        </div>
        <div className='flex gap-3 justify-center items-center'>
          <img src={heart} alt="" />
              {user.id ? 
              <Link to="/" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cerrar sesión</Link>
                : 
                <Link to="/login" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Iniciar sesión</Link>
              }
        </div>
      </div>
</nav>
  )
}

export default NavBar