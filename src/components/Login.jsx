import googleLogo from "../assets/google-logo.png";
import githubLogo from "../assets/github-logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("")
    const {googleLogin, githubLogin, loginUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSocialLogin = (socialMedia) => {
        socialMedia()
        navigate("/")
    } 

    const handleSubmit = e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      // reset error
      setError("")

      loginUser(email, password)
      .then(() => {
        console.log("successfully logged in");

        // reset input fields
        e.target.reset();
        
        // redirect to home 
        navigate("/")
      })
      .catch(err => {
        setError(err.message)
      })
    }

    return (
    <section>
      <div className="min-h-[80vh] flex justify-center items-center">
        <div className="w-96 bg-white shadow-lg p-8 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-5 text-center">Please Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="w-full border border-gray-200 p-3 rounded-lg mb-5 focus:outline-0"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <input
              className="w-full border border-gray-200 p-3 rounded-lg mb-5 focus:outline-0"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <button className="w-full font-semibold bg-blue-500 text-white p-3 rounded-lg mb-5 shadow-md">
              Login
            </button>
          </form>

            {/* divider */}
            <div className="flex items-center mb-5">
              <div className="flex-grow border-t"></div>
              <span className="mx-3 text-lg font-semibold">or</span>
              <div className="flex-grow border-t"></div>
            </div>

            {/* login with google or github */}
            <button onClick={() => handleSocialLogin(googleLogin)} className="w-full bg-white shadow-lg p-3 border border-gray-100 rounded-lg mb-5">
              <div className="flex items-center justify-center gap-5">
                <img className="w-8" src={googleLogo} alt="google logo" />
                <p className="font-medium">Login With Google</p>
              </div>
            </button>

            <button onClick={() => handleSocialLogin(githubLogin)} className="w-full bg-white shadow-lg p-3 border border-gray-100 rounded-lg">
              <div className="flex items-center justify-center gap-5">
                <img className="w-8" src={githubLogo} alt="google logo" />
                <p className="font-medium">Login With Github</p>
              </div>
            </button>
            <p className="mt-5">
            Already have an account? Please{" "}
            <Link className="text-blue-500 underline" to="/register">
              Register
            </Link>
          </p>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default Login;
