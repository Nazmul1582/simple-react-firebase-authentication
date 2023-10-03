import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <section>
      <div className="min-h-[80vh] flex flex-col gap-10 justify-center items-center">
        <h1 className="text-3xl font-bold">
          Simple React Firebase Authentication
        </h1>
        <div className="bg-white shadow-lg border border-gray-100 p-5 rounded-lg">
          <img
            className="mx-auto w-20 h-20 rounded-full mb-5"
            src={user.photoURL}
            alt={user.displayName}
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold">{user.displayName}</h2>
            <p className="text-gray-400">{user.email}</p>
          </div>
          <button className="w-full font-semibold bg-blue-500 text-white p-3 rounded-lg mt-5 shadow-md">
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
