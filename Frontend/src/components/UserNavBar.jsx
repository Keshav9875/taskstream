

import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import toast from "react-hot-toast";


// this is usernavbar component
// this component is used to show the navbar for the user
// it is used in private routes
function UserNavBar() {
   const handleLogout = () => {
      localStorage.removeItem("token");
      toast.success("Logged out successfully");
      navigate("/login");
   };

   return (
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 border-b border-gray-200 bg-white/80 backdrop-blur-md sm:px-6 lg:px-8">
         <div className="flex items-center justify-between mx-auto max-w-7xl">
    
            <Link to={"/"} className="flex items-center gap-2 transition-opacity hover:opacity-90">
               <img 
                  src={logo} 
                  alt="logo" 
                  className="w-auto h-10 sm:h-12" 
               />
               <span className="text-xl font-bold text-gray-800 sm:text-2xl">
                  TaskStream
               </span>
            </Link>
   

           {/* go to home page */}
            <Link to={"/"} onClick={handleLogout}>
            <div className="flex items-center gap-3 sm:gap-4">
               <button 
                  onClick={handleLogout}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:border-red-500 hover:text-red-600 transition-colors duration-200"
               >
                  Logout
               </button>
            </div>
            </Link>
         </div>
      </nav>
   );
}

export default UserNavBar;