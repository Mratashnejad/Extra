import React from "react";
import { Route } from "react-router-dom";
import ArticleList from "./components/Article/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup"

import DashboardNav from "./components/Dashboard/DashboardNav"
import LandingHeader from "./components/home/LandingHeader"



const BaseRouter = () => {
  return (
    <div>
      <Route exact path="/" component={LandingHeader}/>
      {/* <Route exact path="/Extra" component={ArticleList} /> */}
      
      <Route exact path="/login/" component={Login} />
      <Route exact path="/signup/" component={Signup} />
      {/* Dashboard routes */}
      <Route exact path="/dashboard/" component={DashboardNav} />

      
      {/* <Route exact path="/dashboard/extra" component={ArticleList} />
      <Route exact path="/dashboard/extra/:articleID/" component={ArticleDetail} /> */}

    </div>
  );
};

export default BaseRouter;
