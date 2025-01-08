import { StyledEngineProvider, ThemeProvider } from "@mui/system";
import "./App.css";
import { Suspense } from "react";
import AppLoader from "./components/atoms/loaders/apploader";
import RoutesComponent from "./routes/routecomponent";

function App() {
  return (
    <>
      <ThemeProvider theme={""}>
        <StyledEngineProvider injectFirst>
          <Suspense fallback={<AppLoader />}>
          <RoutesComponent/>
          </Suspense>
        </StyledEngineProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
