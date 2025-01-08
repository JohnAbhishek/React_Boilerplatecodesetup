import Backdrop from "@mui/material/Backdrop";
import { appLoaderStyles } from "./useStyles";
import { CircularProgress } from "@mui/material";

export default function AppLoader() {
  return (
    <Backdrop
      id="loaderContainer"
      sx={appLoaderStyles.backdrop}
      open={true}
      onClick={() => null}
    >
    <CircularProgress color="inherit"/>
    </Backdrop>
  );
}
