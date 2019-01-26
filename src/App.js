import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {  Route } from "react-router-dom";
import Movielisting from './components/Movielisting'
import DetailsComponent from './components/DetailsComponent'
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';



class App extends Component {



  
  render() {
    return (

      <div >
<HeaderComponent/>

        {/* <Route exact path="/" component={movielisting} /> */}

        <div className="mt-5">
        <Route exact path="/movie/:id" component={DetailsComponent}/>

                    <Movielisting />
        </div>
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
