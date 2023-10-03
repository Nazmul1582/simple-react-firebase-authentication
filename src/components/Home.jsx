import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Home = () => {
  const {user} = useContext(AuthContext);

    return (
        <section>
        <div className="min-h-[80vh] flex flex-col gap-10 justify-center items-center">
          <h1 className="text-3xl font-bold">
            Simple React Firebase Authentication
          </h1>
          <div className="">
            <img src={user.photoURL} alt={user.displayName} />
            <h2>User: {user.displayName}</h2>
            <p>Email: {user.email}</p>
          </div>
        </div>
      </section>
    );
};

export default Home;