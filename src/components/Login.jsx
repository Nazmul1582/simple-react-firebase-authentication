const Login = () => {
  return (
    <section>
      <div className="min-h-[80vh] flex justify-center items-center">
        <div className="w-96 bg-white shadow-lg p-8 rounded-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-5 text-center">
            Please Login
          </h2>
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
            <button className="w-full font-semibold bg-blue-500 text-white p-3 rounded-lg mb-5">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
