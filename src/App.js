import React from "react";
import { Route, Switch, useHistory} from "react-router-dom";
import Header from "./components/Header/Header";
import Me from "./components/Me/Me";
import Aboutme from "./components/Aboutme/Aboutme";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
// import CurrentUserContext from "./contexts/CurrentUserContext";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn]= React.useState(false)
  
  const history = useHistory();

  React.useEffect(() => {
    const jwt = localStorage.getItem("email", "password");
    if (jwt) {
          setLoggedIn(true);
          // history.push("/");
        }
  }, []);

  function handleRegister(password, email) {
localStorage.clear()
   localStorage.setItem("email", email)
   localStorage.setItem("password", password)
   console.log(localStorage)
   history.push("/sign-in")
  }

  function handleLogin(password, email) {
       localStorage.getItem("email", email)
       localStorage.getItem("password", password)
       console.log(localStorage)
       history.push("/")
      }

  return (
      <div className="App">
        <Header />

        <main className="content">
          {/* <Me />
        <Aboutme />
        <Skills />
        <Portfolio /> */}
          <Switch>
            <Route path="/sign-up">
              <Register onRegister={handleRegister}/>
            </Route>
            <Route path="/sign-in">
              <Login  onLogin={handleLogin}/>
            </Route>
            <ProtectedRoute exact
              path="/"
              loggedIn={loggedIn}
            >
            <Me />
            <Aboutme />
            <Skills />
            <Portfolio />
            </ProtectedRoute>
          </Switch>
        </main>
        <Footer />
      </div>
  );
}

export default App;
