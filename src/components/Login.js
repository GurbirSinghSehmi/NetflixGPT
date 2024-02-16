import { useState } from "react"
import Header from "./Header"
const Login = () => {
    const [isSignIn , setIsSignIn] = useState(true);
    let toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>
        <div className = "absolute">
            <img 
            src= "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt = "Logo"/>
        </div>
        <form className = "w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85">
            <h1 className = "font-bold text-3xl py-4" > {isSignIn ? "Sign In" : "Sign Up"}</h1>
            
              {  
              !isSignIn && <input type = "text" placeholder = "First Name" className = "p-4 my-4 w-full bg-gray-700"/>
              }
            <input type = "text" placeholder = "Email Address" className = "p-4 my-4 w-full bg-gray-700"/>
            <input type = "password" placeholder = "Password" className = "p-4 my-4 w-full bg-gray-700"/>
            <button className = "p-4 my-6 bg-red-700 w-full rounded-lg ">{isSignIn ? "Sign In" : "Sign Up"}</button>
            {isSignIn ? <p className="my-2">New to Netflix? <span onClick = {toggleSignIn} className = "cursor-pointer text-yellow-700">Sign Up</span> Now</p> : <p className="my-2">Already Registered? <span onClick = {toggleSignIn} className = "cursor-pointer text-yellow-700">Sign In</span> Now</p>}
        </form>
    </div>
  )
}

export default Login