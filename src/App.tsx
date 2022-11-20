import { BrowserRouter } from "react-router-dom";
import { ApplicationRouter } from "./Routes";
import teamTheme from "./config/theme";
import { CssVarsProvider } from "@mui/joy";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <CssVarsProvider
          disableTransitionOnChange
          theme={teamTheme}
          defaultMode="system"
        >
          <Toaster />
          <ApplicationRouter />
        </CssVarsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
