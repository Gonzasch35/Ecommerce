import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"

const Admin = () => {

  const user = useSelector(state=>state.user)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!user.admin) navigate('/')
  }, [])

  return (
    <>
        <main className="bg-gradient-to-br from-cyan-900 to-green-700 min-h-screen">
            <Outlet />
        </main>
    </>
  )
}

export default Admin