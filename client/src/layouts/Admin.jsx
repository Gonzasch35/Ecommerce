import { Outlet } from "react-router-dom"
import NavBarAdmin from "../components/navBar/NavBarAdmin"

const Admin = () => {
  return (
    <>
        <NavBarAdmin />
        <main className="bg-gradient-to-br from-cyan-900 to-green-700 min-h-screen">
            <Outlet />
        </main>
    </>
  )
}

export default Admin