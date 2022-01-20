import './App.css';
import './Component/Navbar'

import { Navbar } from './Component/Navbar';
import { Home } from './Component/Home'
import { Login } from './Component/Login';
import {Contact}from './Component/Contact';
import {Signup} from './Component/Signup';
import {About} from './Component/About';
import{Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/About">
      <About />
      </Route>
      <Route path="/Contact">
      <Contact />
      </Route>
      <Route path="/Login">
      <Login />
      </Route>
      <Route path="/Signup">
      <Signup />
      </Route>
     
     


    </>


  );
}

export default App;
