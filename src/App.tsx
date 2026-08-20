import "./assets/css/globals.css";
import "./assets/css/tailwind.css";

import { createBrowserRouter, RouterProvider } from "react-router";

import Index from "./pages";
import Clock from "./pages/clock";

const router = createBrowserRouter([
    { path: "/", Component: Index },
    { path: "/relogio", Component: Clock },
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
