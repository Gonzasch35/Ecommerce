import "flowbite";
import logo from "../../assets/breaking_bad.png";
import { filter_product,findProduct } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import heart from "../../assets/heart.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartIcon from "../icons/CartIcon";
import HeartIcon from "../icons/HeartIcon";

const NavBar = ({ categorias }) => {
  const user = useSelector((state) => state.user);
  const [findData,setFindData] = useState();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

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
    <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
            Indumentaria
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div>
          <form className="flex items-center h-10 " onSubmit={handleFind}>
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full h-10">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              </div>
              <input
                type="text"
                id="simple-search"
                onChange={handleChange}
                className="h-9 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar..."
                required
              ></input>
            </div>
            <button
              type="submit"
              className="mt-1 h-9 p-2.5 ms-1 text-sm font-medium text-white bg-violet-700 rounded border border-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
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

        <div className="md:flex gap-3 justify-center items-center hidden w-full md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent md:text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-800 hover:rounded-xl md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-violet-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
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
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-gray-900 divide-y divide-gray-100 rounded-lg  shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownLargeButton"
                >
                  {categorias?.map((categoria) => {
                    return (
                      <li key={categoria.id}>
                        <Link
                          onClick={() => handleClick(categoria.id)}
                          to={`/categoria/${categoria.id}`}
                          className="block px-4 text-white py-2 hover:bg-violet-800 dark:hover:bg-gray-600 dark:hover:text-white"
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

          <Link to="/carrito"><CartIcon cart={user ? user.cart?.length : 0}/></Link>
          <Link className="" to='/favoritos'><HeartIcon color={'fill-white'} clase={'fill-none'} svgClase={'fill-none'}/></Link>
          {user.id ? (
            <Link
              to="/"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:text-black md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Cerrar sesión
            </Link>
          ) : (
            <Link
              to="/login"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-violet-700 md:p-0 dark:text-white md:dark:hover:text-violet-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
