import googleLogo from "../assets/google-logo.png";

const Login = () => {
  return (
    <section>
      <div className="min-h-[80vh] flex justify-center items-center">
        <div className="w-96 bg-white shadow-lg p-8 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-5 text-center">Please Login</h2>
          <form>
            <input
              className="w-full border border-gray-200 p-3 rounded-lg mb-5 focus:outline-0"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <input
              className="w-full border border-gray-200 p-3 rounded-lg mb-5 focus:outline-0"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <button className="w-full font-semibold bg-blue-500 text-white p-3 rounded-lg mb-5 shadow-md">
              Login
            </button>
            {/* divider */}
            <div className="flex items-center mb-5">
              <div className="flex-grow border-t"></div>
              <span className="mx-3 text-lg font-semibold">or</span>
              <div className="flex-grow border-t"></div>
            </div>
            {/* login with google */}
            <button className="w-full bg-white shadow-lg p-3 border border-gray-100 rounded-lg">
              <div className="flex items-center justify-center gap-5">
                <img className="w-8" src={googleLogo} alt="google logo" />
                <p className="font-medium">Login With Google</p>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
