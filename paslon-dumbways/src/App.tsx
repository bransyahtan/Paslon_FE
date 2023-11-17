import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddPartai,
  AddPaslon,
  DashboardPage,
  DetailPage,
  LandingPage,
  ListPartai,
  ListPaslon,
  LoginPage,
  RegisterPage,
  VotePage,
} from "./pages";
import { PrivateRouteAdmin, PrivateRouteUser } from "./utils/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <PrivateRouteUser />,
    children: [
      {
        path: "detail-page",
        element: <DetailPage />,
      },
      {
        path: "vote-page",
        element: <VotePage />,
      },
    ],
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
    path: "/admin",
    element: <PrivateRouteAdmin />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "add-partai",
        element: <AddPartai />,
      },
      {
        path: "add-paslon",
        element: <AddPaslon />,
      },
      {
        path: "list-partai",
        element: <ListPartai />,
      },
      {
        path: "list-paslon",
        element: <ListPaslon />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
