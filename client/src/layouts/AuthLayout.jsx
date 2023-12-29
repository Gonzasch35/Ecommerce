import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const AuthLayout = () => {

  const user = useSelector(state=>state.user)
  console.log(user);

  return (
    <>
      {user.id ? 
        <main className="bg-gradient-to-br from-cyan-900 to-green-700 min-h-screen">
            <Outlet />
        </main>
        : <main className="bg-gradient-to-br from-cyan-900 to-green-700 min-h-screen">
            <Outlet />
          </main>
      }
        
    </>
  )
}

export default AuthLayout