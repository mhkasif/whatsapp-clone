import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import { actionTypes } from "../Hooks/reducer";
import { useStateValue } from "../Hooks/StateProvider";
import './Login.scss'
const Login = () => {
   const [{},dispatch]=useStateValue()
     const signIn=async ()=>{
         console.log("clicked");
         try {
             const resp=await auth.signInWithPopup(provider)
             console.log(resp);
            dispatch({
              type:actionTypes.SET_USER,
              user:resp.user
            })

        } catch (error) {
            console.log(error);
        }
     }
  return (
    <div>
      <div className="login">
        <div className="login__container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="whatsapp-logo"
          />
          <div className="logo__text">
            <h1>Sign in to Whatsapp</h1>
          </div>
          <Button type="submit" onClick={signIn}>Sign in with Google</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
