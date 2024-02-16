import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"

const Body = () => {
    const appRouter = createBrowserRouter([
    {
        path:"/browse",
        element : <Browse/>,
    },
    {
        path:"/login",
        element : <Login/>,
    }
    ]);
  return (
    <div>
       <RouterProvider router = {appRouter}/>
    </div>
    
  )
}

export default Body