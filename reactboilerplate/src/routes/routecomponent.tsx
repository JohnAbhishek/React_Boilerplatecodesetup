import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import PrivateRoute from "./privateRoute";
import { getRoutes } from ".";
import PublicRoute from "./publicRoute";
import Errorpage from "../components/atoms/errorpages/errorpage";
import Authhooks from "../features/authentication/hooks/authHooks";


const SignIn = lazy(() => import("../pages/signin"));

// Define the type for route objects
interface RouteType {
  component: JSX.Element | string;
  id: string;
  path: string;
}

const RoutesComponent: React.FC = () => {
  const [state, setState] = useState<RouteType[]>([
    { component: "djjd", id: "3", path: "report" },
  ]);

  const { isAuthenticated } = Authhooks()
  console.log(isAuthenticated,"authhhhhhhhhh");
  
  useEffect(() => {
    const routes = getRoutes() as RouteType[];
    setState(routes);
  }, [isAuthenticated]);

  const usercookielevelroutes = getRoutes() as RouteType[];
  const routecomp = usercookielevelroutes ?? state;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          {routecomp?.map((route) => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
        </Route>
        <Route path="*" element={<Errorpage />} />
        <Route
          path="/signin"
          element={<PublicRoute component={SignIn} restricted={true} />}
        />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
