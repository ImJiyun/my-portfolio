import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import ProjectDetail from "../pages/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/projects/:projectId", element: <ProjectDetail /> },
    ],
  },
]);

export default router;
