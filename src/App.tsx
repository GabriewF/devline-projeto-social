import './App.css'
import './assets/css/fonts.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Index from './pages'
import Coursers from './components/views/About'
import Teachers from './components/views/teachers'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Teachers
  },
  {
    path: "/test",
    Component: Coursers
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
