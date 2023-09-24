
import React, { useState } from "react";
import {auth} from '../firebase'
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSumit = async (e)=>{
    e.preventDefault()
    console.warn(email ,password)
    try{
      const result =  await auth.signInWithEmailAndPassword(email ,password)
      window.M.toast({html: `Welcome ${result.user.email}`, classes:"green"})
      history.push('/')
    }
    catch(err){
      window.M.toast({html: err.message, classes:"green"})
      console.log("check here")
    }
   

  }

  return (
    <div className="center container" style={{maxWidht:"500px"}}>
      <h1>Login!</h1>
      <form onSubmit={(e)=> handleSumit(e)}>
        <div className="input-field">
          <input
            placeholder="Email"
            type="email"
            className="validate"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            className="validate"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn blue">LogIn</button>
      </form>
    </div>
  );
}