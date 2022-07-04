import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
     const unsubscribe =  auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });
   return () =>{
    unsubscribe()
   }
   
  }, []);

  return (
    <>
      <Navbar user={user} />
      <Switch>
        <Route exact path="/">
          <Todo user={user} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </>
  );
}

export default App;