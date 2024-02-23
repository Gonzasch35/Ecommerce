import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const Landing = () => {

  const user = useSelector(state=>state.user)
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user.admin);
    if(user.admin)  navigate('/admin')
  }, [user.admin, navigate]);

  return (
    <>
      <main className="bg-gradient-to-br min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default Landing;
