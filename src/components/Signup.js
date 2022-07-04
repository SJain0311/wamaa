import React, { useState } from "react";
import {auth} from '../firebase'
import { useHistory } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleSubmit = async (e)=>{
      e.preventDefault()
      console.warn(email ,password)
      try{
        const result =  await auth.createUserWithEmailAndPassword(email ,password)
        window.M.toast({html: `Welcome ${result.user.email}`, classes:"green"})
        history.push('/')
      }
      catch(err){
        window.M.toast({html: err.message, classes:"green"})
      }
     
  }

  return (
    <div className="center container" style={{maxWidht:"500px"}}>
      <h1>Signup</h1>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <div className="input-field">
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
             value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn blue">SignUp</button>
      </form>
    </div>
  );
}