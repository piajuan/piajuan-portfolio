import Home from "./pages/Home"
import Works from "./pages/Works"
import About from "./pages/About"
import AppLayout from "./components/layouts/AppLayout"
import ScrollToTop from "./components/ScrollToTop"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/works",
        element: <Works />
      },
      {
        path: "/about",
        element: <About />
      },
    ]
  },
])

function App() {

  return (
    <div className="dark">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
