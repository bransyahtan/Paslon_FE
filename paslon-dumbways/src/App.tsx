import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DetailPage, LandingPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/detail-page",
    element: <DetailPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
