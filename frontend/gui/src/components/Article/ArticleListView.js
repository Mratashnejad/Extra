import axios from "axios";
import React from "react";
import Articles from "./Article";
import CustomForm from "../Form";
import {connect} from 'react-redux';


class ArticleList extends React.Component {
  state = {
    articles: []
  };
  
  componentWillReceiveProps(newProps) {
    console.log(newProps);

    if (newProps.token) {
      axios.defaults.headers = {
        "content-type": "Application/json",
        Authorization : newProps.token
      }
      axios.get("http://127.0.0.1:8000/api/").then(res => {
        this.setState({
          articles: res.data
        });
        console.log(res.data);
        this.forceUpdate();
      });
    } else {
       /// return  shuld be login
    }
    
  }

  render() {
    return (
      <div>
      <div>       
        <Articles data={this.state.articles} />
        <br/>
      </div>

      {/* add data from  */}
      {/* <div class ="container">
       
        <h2>Create an article</h2>
        <CustomForm requestType="post" articleID={null} btnText="Create"/>
      </div> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    token :state.token 
  }
}


export default connect(mapStateToProps)(ArticleList);

