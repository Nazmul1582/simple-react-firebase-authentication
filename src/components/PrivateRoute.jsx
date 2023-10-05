import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-[80vh] grid place-items-center">
        <span className="loading loading-spinner text-success loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
