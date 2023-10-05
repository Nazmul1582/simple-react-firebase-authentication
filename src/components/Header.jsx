import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };

  return (
    <header className="bg-blue-100">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-5">
          <div className="text-2xl font-bold text-blue-500">
            <h2>Logo</h2>
          </div>
          <nav>
            <ul className="flex items-center gap-5 font-semibold">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          {user ? (
            <div className="flex items-center gap-3">
              <p className="font-semibold">{user.displayName}</p>
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt={`photo of ${user.displayName}`}
              />
              <button onClick={handleLogOut} className="btn btn-info">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-5">
              <Link to="/login">
              <button className="btn btn-info">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-info">Register</button>
            </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
