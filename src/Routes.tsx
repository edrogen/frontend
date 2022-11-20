import { useRoutes } from "react-router-dom";
import { TeamNav } from "./components/TeamNav";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/Login";
import { ApplicationPage } from "./pages/Applicaton";
import Layout from "./layotus/main";
import { HeaderComponent } from "./components/Header";

import { CssBaseline } from "@mui/joy";

export const ApplicationRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: (
        <Layout.Root>
          <CssBaseline />

          <HeaderComponent />
          <Layout.SideNav>
            <TeamNav />
          </Layout.SideNav>
          <HomePage />
        </Layout.Root>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },

    {
      path: "/app/:id",
      element: (
        <Layout.Root>
          <CssBaseline />

          <HeaderComponent />
          <Layout.SideNav>
            <TeamNav />
          </Layout.SideNav>
          <ApplicationPage />
        </Layout.Root>
      ),
    },
  ]);

  return routes;
};
