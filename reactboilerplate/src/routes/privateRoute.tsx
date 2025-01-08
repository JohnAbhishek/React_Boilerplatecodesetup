import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../pages/layout";
import { Navigate } from "react-router-dom";
import { getCookie } from "../helpers/cookieHelpers";

const PrivateRoute: React.FC = () => {
  const token = getCookie("token");
  const location = useLocation(); // Properly typed location object from react-router-dom

  useEffect(() => {
    if (location.pathname === "/") {
      window.location.href = "/signin";
    }
  }, [location]);

  return token ? <Layout /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
