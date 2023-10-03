import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
           <div className="container mx-auto">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </nav>
            </div> 
        </header>
    );
};

export default Header;