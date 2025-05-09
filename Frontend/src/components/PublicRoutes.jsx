import { Outlet } from "react-router";
import NavBar from "./NavBar";

// public routes -> Accessible to everyone
function PublicRoutes() {
   return (
      <>
         <NavBar />
         <Outlet />
      </>
   );
}

export default PublicRoutes;
