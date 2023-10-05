import { Link } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(name, email, password, terms);
  }

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
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
              {/* <div className="absolute top-4 right-2 cursor-pointer">
                <FaEyeSlash /> <FaEye />
              </div> */}
            </div>
            <label className="flex items-center gap-3 mb-5">
              <input type="checkbox" name="terms" required />
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
        </div>
      </div>
    </section>
  );
};

export default Register;
