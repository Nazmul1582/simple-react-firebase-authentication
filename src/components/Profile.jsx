import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-[80vh] grid place-items-center">
      <div className="bg-white shadow-lg border border-gray-100 p-5 rounded-lg">
        <h2 className="text-2xl font-bold mb-5 text-center">My Profile</h2>
        <img
          className="mx-auto w-20 h-20 rounded-full mb-5 object-cover"
          src={user.photoURL}
          alt={user.displayName}
        />
        <div className="text-center">
          <h2 className="text-xl font-semibold">{user.displayName}</h2>
          <p className="text-gray-400">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
