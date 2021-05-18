import React from 'react';
import ToDoList from './components/ToDoList';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// const title = {
//       intro1: "Greetings!",
//       intro2: "My name is Austin Chan",
// };
//array
//const nums = [1, 2, 3, 4];

//iterate array
//
// const newNums = nums.map(function(num){
//       return num;
// })

// function Bubba(){
//       return(
//             nums.map(function(num){
//                   return num;
//             })
//       )
// };

export default function App() {
      return (
                  <>
                        <Router>
                              <Navbar />
                              <Switch>
                                    <Route path='/' exact />
                              </Switch>
                        </Router>
                  </>

            );
    
  
}