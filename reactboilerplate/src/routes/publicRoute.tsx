import { Navigate } from "react-router-dom";
import { getCookie } from "../helpers/cookieHelpers";

interface PublicRouteProps {
  component: React.ComponentType<unknown>;
  restricted?: boolean;
  [key: string]: unknown; // For additional props
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  restricted = false,
  ...rest
}) => {
  const token = getCookie("token");

  if (token && restricted) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Component {...rest} />;
};

export default PublicRoute;
