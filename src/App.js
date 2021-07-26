import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import SignIn from './components/screens/SignIn';
import Home from './components/screens/Home';
import Signup from './components/screens/Signup';
import Profile from './components/screens/Profile';
import CreatePost  from './components/screens/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/">
         <Home/>
      </Route>
      <Route path="/signin">
         <SignIn/>
      </Route>
      <Route path="/signup">
         <Signup/>
      </Route>
      <Route path="/Profile">
         <Profile/>
      </Route>
      <Route path="/create">
         <CreatePost/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
