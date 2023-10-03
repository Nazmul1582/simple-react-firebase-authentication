import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-100">
      <div className="container mx-auto">
        <div className="flex justify-between py-5">
          <div className="text-2xl font-bold text-blue-500">
            <h2>Logo</h2>
          </div>
          <nav>
            <ul className="flex gap-5 font-semibold">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
