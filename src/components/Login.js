import { useRef, useState } from "react"
import Header from "./Header"
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../utils/firebase"
import { updateProfile } from "firebase/auth";

const Login = () => {
    const [isSignIn , setIsSignIn] = useState(true);
    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    let toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }
    const handleButtonClick = function(){

        // validate form data
      const message = checkValidData(email.current.value,password.current.value);
      setErrorMessage(message);

      if(message != null) return;

      if(!isSignIn)
      {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +"-"+ errorMessage);
        });
      }
      else{
        
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         
        //   updateProfile(user, {
        //     displayName: name.current.user, photoURL: "https://example.com/jane-q-user/profile.jpg"
        //   }).then(() => {
        //     // Profile updated!
        //   navigate("/browse");
        //   }).catch((error) => {
            
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   setErrorMessage(errorCode +"-"+ errorMessage);
        //   });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +"-"+ errorMessage);
        });
      }
    
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
              !isSignIn && <input ref = {name} type = "text" placeholder = "First Name" className = "p-4 my-4 w-full bg-gray-700"/>
              }
            <input ref = {email} type = "text" placeholder = "Email Address" className = "p-4 my-4 w-full bg-gray-700"/>
            <input ref = {password} type = "password" placeholder = "Password" className = "p-4 my-4 w-full bg-gray-700"/>
            <p className = "text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button type = "button" className = "p-4 my-6 bg-red-700 w-full rounded-lg " onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
            {isSignIn ? <p className="my-2">New to Netflix? <span onClick = {toggleSignIn} className = "cursor-pointer text-yellow-700">Sign Up</span> Now</p> : <p className="my-2">Already Registered? <span onClick = {toggleSignIn} className = "cursor-pointer text-yellow-700">Sign In</span> Now</p>}
        </form>
    </div>
  )
}

export default Login