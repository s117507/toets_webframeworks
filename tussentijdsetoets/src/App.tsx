import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children= [
        {
          path: "",
          element: <HomePage/
        }
      ]
    }
  ])
  return (
    <RouterProvider/>
  )
}

export default App
