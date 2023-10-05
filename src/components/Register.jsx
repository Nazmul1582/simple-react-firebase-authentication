import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { createUser, updateUser, emailVerification } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    // reset error
    setError("")
    
    if (!terms) {
      setError("Your have to accept your terms and conditions for register!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be 6 characters or longer!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Your password should have at lest one uppercase charachter!");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);

        // update profile
        updateUser(res.user, name);

        // email varification
        emailVerification(res.user)
        .then(() => {
          console.log("Please check your email and verified your account!");
        })
        .catch(err => {
          setError(err.message)
        })

        // navigate to home page
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <section>
      <div className="min-h-[80vh] flex justify-center items-center">
        <div className="w-96 bg-white shadow-lg p-8 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-5 text-center">Register Now!</h2>
          <form onSubmit={handleRegister}>
            <input
              className="w-full border border-gray-200 p-3 rounded-lg mb-5 focus:outline-0"
              type="name"
              name="name"
              placeholder="Enter your name"
              required
            />
            <input
              className="w-full border border-gray-200 p-3 rounded-lg mb-5 focus:outline-0"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <div className="relative">
              <input
                className="w-full border border-gray-200 p-3 rounded-lg mb-5 focus:outline-0"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-4 right-2 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <label className="flex items-center gap-3 mb-5">
              <input type="checkbox" name="terms" />
              Accept our terms and conditions.
            </label>
            <button className="w-full font-semibold bg-blue-500 text-white p-3 rounded-lg mb-5 shadow-md">
              Register
            </button>
            <p>
              Already have an account? Please{" "}
              <Link className="text-blue-500 underline" to="/login">
                Login
              </Link>
            </p>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Register;
