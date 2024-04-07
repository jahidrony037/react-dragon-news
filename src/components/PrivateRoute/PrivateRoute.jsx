import PropType from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Loader from "../Loader";
const PrivateRoute = ({ children }) => {
  const { isLoading, user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (isLoading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropType.node,
};

export default PrivateRoute;
