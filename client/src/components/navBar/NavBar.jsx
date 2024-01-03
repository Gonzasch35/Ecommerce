import logo from "../../assets/breaking_bad.png";
import { filter_product,findProduct } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import heart from "../../assets/heart.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartIcon from "../icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";
import ProfileIcon from "../icons/ProfileIcon";
import DivArrowIcon from "../icons/DivArrowIcon";
import MenuIcon from "../icons/MenuIcon";

const NavBar = ({ categorias }) => {
  const user = useSelector((state) => state.user);
  const [findData,setFindData] = useState();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [perfil, setPerfil] = useState(false)
  const [cat, setCat] = useState(false)
  const [menu, setMenu] = useState(false)

  const handleClick = (id) => {
    dispatch(filter_product(id));
  };

  const handleChange = (e) => {
    setFindData(e.target.value);
  }

  const handleFind = (e) =>{
    e.preventDefault();
    dispatch(findProduct(findData));
  }

  return (
    <nav className="bg-gray-900 flex flex-col justify-center md:items-center py-3 gap-3">
      <div className="w-full flex flex-col md:flex-row gap-5 justify-between md:px-5">
        <div className="flex justify-between w-full md:w-auto px-5">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="text-white text-2xl font-semibold whitespace-nowrap">
              Indumentaria
            </span>
          </a>
          <button onClick={()=>setMenu(!menu)} className="block md:hidden">
            <MenuIcon />
          </button>
        </div>

        
        <div className="block">
          <form className="flex items-center h-10 " onSubmit={handleFind}>
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full md:w-72 h-10">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              </div>
              <input
                type="text"
                id="simple-search"
                onChange={handleChange}
                className="h-9 mt-1 bg-gray-50 text-gray-900 text-sm md:rounded focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                placeholder="Buscar..."
                required
              ></input>
            </div>
            <button
              type="submit"
              className="mt-1 h-9 px-6 md:p-2.5 md:ms-2 text-sm font-medium text-white bg-violet-700 md:rounded border border-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>

        <div className="md:flex gap-3 justify-center items-center hidden">

          <Link to="/carrito"><CartIcon color={'white'} clase={'hover:scale-105'} cart={user ? user.cart?.length : 0}/></Link>
          <Link className="" to='/favoritos'><HeartIcon color={'fill-white hover:fill-violet-500'} clase={'fill-none'} svgClase={'fill-none'}/></Link>
          <button onClick={()=>setPerfil(!perfil)} className="">
            <ProfileIcon />
            <div className={!perfil ? "hidden" : 'absolute z-10 right-0 top-16 bg-gray-800 py-4'}>
              {user.id ? (
                <div className="flex flex-col gap-y-2">
                  <DivArrowIcon clase={'-rotate-90 absolute -top-3 right-[30px]'} />
                  <Link 
                    onClick={()=>setPerfil(false)} to='/perfil' className="block w-32 text-white hover:text-violet-500 md:p-0">Mi cuenta</Link>
                  <Link 
                    onClick={()=>setPerfil(false)} to='/perfil' className="block w-32 text-white hover:text-violet-500 md:p-0">Mis compras</Link>
                  <Link
                    onClick={()=>setPerfil(false)}
                    to="/"
                    className="block w-32 text-white hover:bg-gray-100 hover:text-black hover:bg-transparent md:hover:text-violet-500 md:p-0"
                  >
                    Cerrar sesión
                  </Link>
                </div>
                  
              ) : (
                <Link
                  to="/login"
                  className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Iniciar sesión
                </Link>
              )}
            </div>
          </button>
        </div>
      </div>
      <div>
      <ul className="flex flex-col font-medium md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent md:text-white">
            <li>
              <button
                onClick={()=>setCat(!cat)}
                className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-800 hover:rounded-xl hover:bg-transparent md:border-0 md:hover:text-violet-500 md:p-0 md:w-auto dark:text-white hover:text-violet-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Categorías
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                className={cat ? " absolute z-10 marker:font-normal bg-gray-900 divide-y divide-gray-100 rounded-lg  shadow w-44 " : 'hidden'}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                >
                  {categorias?.map((categoria) => {
                    return (
                      <li key={categoria.id}>
                        <Link
                          onClick={() => {
                            handleClick(categoria.id)
                            setCat(false)
                          }}
                          to={`/categoria/${categoria.id}`}
                          className="block px-4 text-white py-2 hover:bg-violet-800"
                        >
                          {categoria.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default NavBar;
