import "./assets/css/globals.css";
import "./assets/css/tailwind.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Index from "./pages";
const router = createBrowserRouter([
    { path: "/", Component: Index }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
