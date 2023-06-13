import Logo from "../assets/logo.png";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-gradient-to-r from-violet-200 to-fuchsia-500 h-screen flex flex-col justify-center items-center">
    <img src={Logo} alt="Logo" className="logo object-scale-down h-40 w-96 flex justify-center" />
      <Link to="/HRMS-client/EmployeeLoginForm" className="block mt-4 text-white hover:text-blue-700 border-2 rounded  py-2 px-4">
        Employee LogIn
      </Link>
      <Link to="/HRMS-client/AdminLoginForm" className="block mt-4 text-white hover:text-blue-700 border-2 rounded  py-1.5 px-6">
        Admin LogIn
      </Link>
    </div>
  );
};

export default HomePage;
