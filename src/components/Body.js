import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
    {
        path:"/browse",
        element : <Browse/>,
    },
    {
        path:"/",
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