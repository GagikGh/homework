import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Home from './Home.jsx'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './NotFound.jsx'
import About from './About.jsx'

const router = createBrowserRouter([
  {path: "/", element: <Home/>, errorElement: <NotFound/>, children: [
    {path: "/about", element: <About/>, errorElement: <NotFound/>},
    {path: "/table", element: <App/>, errorElement: <NotFound/>}
  ] }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}/>
  </StrictMode>
)
