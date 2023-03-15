import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: "/videos", element: <Videos /> },
            { path: "/videos/:videoId", element: <VideoDetail /> },
        ],
    },
]);

function AppRouter() {
    return <RouterProvider router={router} />;
}

export default AppRouter;
