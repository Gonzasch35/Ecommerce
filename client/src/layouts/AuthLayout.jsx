import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
        <main className="bg-gradient-to-br from-cyan-900 to-green-700 min-h-screen">
            <Outlet />
        </main>
    </>
  )
}

export default AuthLayout