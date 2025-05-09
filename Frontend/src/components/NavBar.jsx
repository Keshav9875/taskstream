import { Link } from "react-router";
import logo from "../assets/images/logo.png";

// this is navbar component
// it is used in public routes
function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-white border-b border-gray-200 sm:px-6 lg:px-8">
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

     
        <div className="flex items-center gap-3 sm:gap-4">
          {localStorage.getItem("token") ? (
            <Link to={"/user/tasks"}>
              <button className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:border-indigo-500 hover:text-indigo-600 transition-colors duration-200">
                Go To Tasks
              </button>
            </Link>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="px-5 py-2.5 rounded-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-60 transition-colors duration-200">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-sm">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


