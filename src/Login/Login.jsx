
import { useState } from "react";
import app from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const Login = () => {
    const [user , setUser]=useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn= ()=>{
        signInWithPopup(auth, provider)
        .then(res=>{
            const loggedUser = res.user;
            setUser(loggedUser)
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log('error', error.message)
        })
    }

const handleSignOut =()=>{
    signOut(auth)
    .then(result =>{
        console.log(result)
        setUser(null);
    }

    )
    .catch(error =>{
        console.log(error);
    })

}

    return (
        <div>
        {/* user ? logout : Signin */}

        {
            user?
            <button  onClick={handleSignOut}>SignOut</button> :
            <button onClick={handleGoogleSignIn}>Google Login</button>
        }


       {
        user &&  <div>
            <h3> User: {user.displayName}</h3>
        </div>
       }
            
        </div>
    );
};

export default Login;