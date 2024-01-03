import { Link } from 'react-router-dom';
import logo from "../../assets/breaking_bad.png";
import MenuIcon from '../icons/MenuIcon';
import { useState } from 'react';
import CloseIcon from '../icons/CloseIcon';
import ArrowIcon from '../icons/ArrowIcon';

const NavBarAdmin = () => {

  const [menu, setMenu] = useState(false)
  const [crear, setCrear] = useState(false)

  const handleClickMenu = () => {
    setMenu(!menu)
    setCrear(false)
  }
  const handleClickCrear = () => {
    setCrear(!crear)
  }

  return (
    <nav class="flex justify-between items-center bg-gray-900 px-8 py-5 md:px-32">
      <div>
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
              Indumentaria
            </span>
          </a>
      </div>
      <div className={menu ? 'absolute top-[72px] right-0 px-0 h-full flex flex-col gap-8 md:flex text-white w-2/4 bg-gray-900 m-0 md:gap-4 z-10': 'hidden md:flex gap-3 text-white'}>
        <button className="mx-auto hover:text-violet-500">
          Dashboard
        </button>
        <button onClick={handleClickCrear} className={'relative flex gap-2 first:pr-8 items-center justify-center'}>
          <h2 className={crear ? 'text-violet-500' : 'hover:text-violet-500'}>Crear</h2>
          <div className={crear ? 'absolute border-r-4 border-violet-500 -left-[9rem] top-6 md:top-12 m-auto md:-left-12 flex flex-col gap-y-4 bg-gray-800 px-9 py-2 md:rounded-b-lg z-10' : 'hidden'}>
            <Link to='/admin/crear-producto' className="mx-auto hover:text-violet-500">
              Producto
            </Link>
            <Link to="#" className="mx-auto hover:text-violet-500 ">
                Categoria
            </Link>
            <Link to="#" className="mx-auto hover:text-violet-500">
                Admin
            </Link>
          </div>
          <ArrowIcon />
        </button>
        <button className="mx-auto hover:text-violet-500">
          Cerrar sesión
        </button>
      </div>
      <button onClick={handleClickMenu} className={menu ? 'absolute right-7' : 'hidden'}>
          <CloseIcon />
      </button>
      <button onClick={handleClickMenu} className={!menu ? 'md:hidden' : 'hidden'}>
        <MenuIcon />
      </button>
</nav>
  )
}

export default NavBarAdmin