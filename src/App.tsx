import { BrowserRouter } from "react-router-dom";
import { ApplicationRouter } from "./Routes";
import teamTheme from "./config/theme";
import { CssVarsProvider } from "@mui/joy";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />

          <CssVarsProvider
            disableTransitionOnChange
            theme={teamTheme}
            defaultMode="system"
          >
            <Toaster />
            <ApplicationRouter />
          </CssVarsProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
