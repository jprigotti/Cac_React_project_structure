import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../pages/home/views/HomeView";
import LoginView from "../../pages/login/views/LoginView";
import GeneralLayout from "../layouts/GeneralLayout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <GeneralLayout>
        <HomeView />
      </GeneralLayout>
    ),
  },
  {
    path: "/auth",
    element: (
      <GeneralLayout>
        <LoginView />
      </GeneralLayout>
    ),
  },
]);

export const routes = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Login",
    to: "/auth",
  },
];
