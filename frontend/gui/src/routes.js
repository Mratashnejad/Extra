import React from "react";
import { Route } from "react-router-dom";
import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup"
import home from "./containers/Layout"
import Profile from "./containers/Profile"

const BaseRouter = () => {
  return (
    <div>
      <Route exact path="/"/>
      <Route exact path="/extra" component={ArticleList} />
      <Route exact path="/extras/:articleID/" component={ArticleDetail} />
      <Route exact path="/login/" component={Login} />
      <Route exact path="/signup/" component={Signup} />
      <Route exact path="/profile/" component={Profile}/>
    </div>
  );
};

export default BaseRouter;
