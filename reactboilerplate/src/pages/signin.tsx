import { Grid } from '@mui/system'
import { setCookie } from '../helpers/cookieHelpers'
import { useNavigate } from 'react-router-dom'
import Authhooks from '../features/authentication/hooks/authHooks'

function Signin() {
  const navigate=useNavigate()
  const {toggletoken}=Authhooks()
    const handlelogin=()=>{
        setCookie("token","token")
        navigate("/dashboard")
toggletoken("token")
    }
  return (
    <Grid onClick={handlelogin}>signin</Grid>
  )
}

export default Signin