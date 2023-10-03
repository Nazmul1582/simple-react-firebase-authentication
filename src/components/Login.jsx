import googleLogo from "../assets/google-logo.png";
import githubLogo from "../assets/github-logo.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase.config";

const Login = () => {

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err.message);
        })
    }

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
            <button onClick={handleGoogleLogin} className="w-full bg-white shadow-lg p-3 border border-gray-100 rounded-lg mb-5">
              <div className="flex items-center justify-center gap-5">
                <img className="w-8" src={googleLogo} alt="google logo" />
                <p className="font-medium">Login With Google</p>
              </div>
            </button>

            <button className="w-full bg-white shadow-lg p-3 border border-gray-100 rounded-lg">
              <div className="flex items-center justify-center gap-5">
                <img className="w-8" src={githubLogo} alt="google logo" />
                <p className="font-medium">Login With Github</p>
              </div>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
