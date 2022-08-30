// import logo from './logo.svg';
// npm install react-router-dom@5.2.0 install react router dom fom this command
//rce class based component
//rfc is for function based component
// aajaxload info websit or create spinner gif online-> this gives the load symbol
//npm i react-infinite-scroll-component used to downlode infinite scrool
//npm i react-top-loading-bar  used to install related packegs



import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
// import Newscomponent from './components/Newscomponent';
// import Newsitem from './components/Newsitem';
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";


export default class App extends Component {
  pagesize = 3
  
  render() {
    return (
      <>
        <div>
          <Router>
            <Navbar />
            {/* <Newscomponent/> */
            /* <News pagesize = {pz} country="in" category="business"/> */  /*video 31 */
            /* <Newsitem/> */}
            <Switch>
              <Route exact path="/">
                <News
                  pagesize={this.pagesize} 
                  country="in"
                  category="general"
                  key="general"
                />
              </Route>
              <Route exact path="/business">
                <News
                  pagesize={this.pagesize} 
                  country="in"
                  category="business"
                  key="business"
                />
              </Route>
              <Route exact path="/entertainment">
                <News
                  key="entertainment"
                  pagesize={this.pagesize} 
                  country="in"
                  category="entertainment"
                />
              </Route>
              <Route exact path="/general">
                <News
                  key="general"
                  pagesize={this.pagesize} 
                  country="in"
                  category="general"
                />
              </Route>
              <Route exact path="/health">
                <News
                  key="health"
                  pagesize={this.pagesize} 
                  country="in"
                  category="health"
                />
              </Route>
              <Route exact path="/science">
                <News
                  key="science"
                  pagesize={this.pagesize} 
                  country="in"
                  category="science"
                />
              </Route>
              <Route exact path="/sports">
                <News
                  key="sports"
                  pagesize={this.pagesize} 
                  country="in"
                  category="sports"
                />
              </Route>
              <Route exact path="/technology">
                <News
                  key="technology"
                  pagesize={this.pagesize} 
                  country="in"
                  category="technology"
                />
              </Route>
            </Switch>
          </Router>




        </div>
      </>
    );
  }
}
