import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  DashboardPage,
  DetailPage,
  LandingPage,
  LoginPage,
  RegisterPage,
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
