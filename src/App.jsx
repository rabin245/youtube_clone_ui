import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Video from "./pages/Video";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Videos />,
          },

          {
            path: "/video",
            element: <Video />,
          },
        ],
      },
      ,
    ],
  },
]);

function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
