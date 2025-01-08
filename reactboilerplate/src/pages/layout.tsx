import { Grid } from "@mui/system";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate=useNavigate()

  useEffect(()=>{
    navigate("/dashboards")
  },[])

  return (
    <Grid>layout
      <Grid><Outlet/></Grid>
    </Grid>
  );
}

export default Layout;
