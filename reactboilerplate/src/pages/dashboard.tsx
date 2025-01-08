import { Grid } from "@mui/system"
import { removeCookie } from "../helpers/cookieHelpers"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate=useNavigate()
  const handlelogout=()=>{
    removeCookie("token")
    navigate("/dashboards")
  }
  return (
    <Grid onClick={handlelogout}>dashboards</Grid>
  )
}

export default Dashboard