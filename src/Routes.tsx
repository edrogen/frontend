import { useRoutes } from "react-router-dom";
import { TeamNav } from "./components/TeamNav";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/Login";
import { ApplicationPage } from "./pages/Applicaton";
import Layout from "./layotus/main";
import { HeaderComponent } from "./components/Header";
import { RegisterPage } from "./pages/Register";

import { CssBaseline } from "@mui/joy";

export const ApplicationRouter = () => {
  let routes = useRoutes([
    {
      path: "/dashboard",
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
      path: "/",
      element: <LoginPage />,
    },

    {
      path: "/login",
      element: <LoginPage />,
    },

    {
      path: "/register",
      element: <RegisterPage />,
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
