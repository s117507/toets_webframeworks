import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Root } from "../components/Root/Root.tsx"
import { Home } from "../components/Home/Home.tsx"
import { Page1} from "./pages/Page1/Page1.tsx"
import { Page2} from "./pages/Page2/Page2.tsx"
import { Page3} from "./pages/Page3/Page3.tsx"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "Oefening1",
          element: <Page1/>
        },
        {
          path: "Oefening2",
          element: <Page2/> 
        },
        {
          path: "Oefening3",
          element: <Page3/>
        }
      ]
    }
  ])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
