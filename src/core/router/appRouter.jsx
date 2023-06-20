import { createBrowserRouter } from "react-router-dom";
import LandingView from "../../pages/landing/views/LandingView";
import HomeView from "../../pages/home/views/HomeView";
import LoginView from "../../pages/login/views/LoginView";
import Aboutus from "../../pages/aboutus/views/Aboutus";
import GeneralLayout from "../layouts/GeneralLayout";
import PublicRoutes from "../auth/components/PublicRoutes";
import ProtectedRoutes from "../auth/components/ProtectedRoutes"

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoutes>
        <LandingView />
      </PublicRoutes>

    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoutes>
        <GeneralLayout>
          <HomeView />
        </GeneralLayout>
      </ProtectedRoutes>

    ),
  },
  {
    path: "/aboutus",
    element: (
      <GeneralLayout>
        <Aboutus />
      </GeneralLayout>
    ),
  },
  {
    path: "/auth",
    element: (
      <PublicRoutes>
        <LoginView />
      </PublicRoutes>
    ),
  },
]);

export const routes = [
  {
    name: "Landing",
    to: "/",
  },
  {
    name: "Login",
    to: "/auth",
  },
  {
    name: "Home",
    to: "/home",
  },
];

// export const routes = [
//   {
//     name: "Home",
//     to: "/",
//   },
//   {
//     name: "Login",
//     to: "/auth",
//   },
// ];
