import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardPage, DetailPage, LandingPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/detail-page",
    element: <DetailPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
