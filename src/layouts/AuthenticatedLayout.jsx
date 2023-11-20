import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AuthenticatedLayout = () => {
  return (
    <>
      <Navbar />
      <div className="mx-6 my-12 md:mx-20">
        <Outlet />
      </div>
    </>
  );
};

export default AuthenticatedLayout;
