import "./assets/css/globals.css";
import "./assets/css/tailwind.css";
import "./assets/css/fonts.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Index from "./pages";
import Teste from "./pages/Teste";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Index
  },
  {
    path: "/test",
    Component: Teste
  }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
