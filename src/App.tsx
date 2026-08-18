import "./assets/css/tailwind.css";
import "./assets/css/fonts.css";


import { createBrowserRouter, RouterProvider } from 'react-router';
import Index from './pages';
import Coursers from './components/views/About';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Index
  },
  {
    path: "/test",
    Component: Coursers
  }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
