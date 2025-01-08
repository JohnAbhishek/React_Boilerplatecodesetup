import Dashboard from "../pages/dashboard";
import Layout from "../pages/layout";

const UserRoutes = [
  {
    id: "dashboard",
    path: "/dashboard/*",
    component: <Layout />,
  },
  {
    id: "dashboards",
    path: "/dashboards/*",
    component: <Dashboard />,
  },
];

const AdminRoutes = [
  {
    id: "dashboard",
    path: "/dashboard/*",
    component: <Layout />,
  },
  {
    id: "dashboards",
    path: "/dashboards/*",
    component: <Dashboard />,
  },
];

export const getRoutes = () => {
  //cookievalue
  const userId:string = "1";
  console.log(userId,"id");
  
  return userId==="1"||userId==="3"||userId==="4"||userId==="5"||userId==="6"? AdminRoutes : UserRoutes;
};