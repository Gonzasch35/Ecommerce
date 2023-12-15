import { Outlet } from "react-router-dom"

const Landing = () => {
  return (
    <>
    <main className="bg-gradient-to-br min-h-screen">
        <Outlet />
    </main>
    </>
  )
}

export default Landing