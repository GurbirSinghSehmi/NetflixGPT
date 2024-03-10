import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
 const navigate = useNavigate();
 const user = useSelector((store) => store.user);

 const dispatch = useDispatch();
 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;
          dispatch(addUser({uid : uid,email : email, displayName : displayName}));
          navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
      });
      return () => unsubscribe();
},[])
const handleSignOut = () => {
    signOut(auth).then(() => {
        dispatch(removeUser());
        navigate("/");
      }).catch((error) => {
        // An error happened.
      });
}
const handleGptSearchClick = () => {
  dispatch(toggleGptSearchView());
}
  return (
    <div className = "absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-full flex justify-between">
        <img className = "w-44"
        src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt = "Logo"/>
    {
     user &&    <div className = "my-4 flex">
       <button className = "px-4 py-2 bg-rounded-lg bg-red-950 mx-4 text-white rounded-lg" onClick={handleGptSearchClick}>GPT Search</button>
        <img src = "https://occ-0-1492-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" className = "w-8 h-8"/>
        <button className = "font-bold text-white flex" onClick = {handleSignOut}>(Sign Out)</button>
    </div>
}
    </div>
  )
}

export default Header