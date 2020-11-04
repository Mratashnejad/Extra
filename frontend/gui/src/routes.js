import React from "react";
import { Route } from "react-router-dom";
import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup"
import Dashboard from "./containers/Dashboard"
import LandingHeader from "./components/home/LandingHeader"

const BaseRouter = () => {
  return (
    <div>
      <Route exact path="/" component={LandingHeader}/>
      <Route exact path="/extra" component={ArticleList} />
      <Route exact path="/extra/:articleID/" component={ArticleDetail} />
      <Route exact path="/login/" component={Login} />
      <Route exact path="/signup/" component={Signup} />
      <Route exact path="/Dashboard/" component={Dashboard}/>
    </div>
  );
};

export default BaseRouter;
