//import { auth,signInWithPopup , googleAuthProvider } from '../lib/firebase'
import { getAuth ,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "@/lib/context";
import { auth } from "@/lib/firebase";

export default function EnterPage({ }){
    const { user, username } = useContext(UserContext);
    //const user=true;
    //const username=true;
    return (
     <main>
        {user ?
          !username ? <UsernameForm /> : <SignOutButton />
          : 
          <SignInButton />
        }
     </main>   
    );
}

function SignInButton(){
    
    const signInWithGoogle = async () =>{
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth , provider);
    };
    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src={'/google.png'}/> Sign in with Google
        </button>
    );
}

function SignOutButton(){
    return <button onClick={() => auth.signOut}>sign Out</button>;
}

function UsernameForm(){
    
}