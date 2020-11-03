import axios from "axios";
import React from "react";
import Articles from "../components/Article";
import CustomForm from "../components/Form";
import * as actions from '../store/actions/auth';
import {connect} from 'react-redux';


class ArticleList extends React.Component {
  state = {
    articles: []
  };
  componentDidMount() {
    axios.defaults.headers = {
      "content-type": "Application/json",
      Authorization : this.props.token
      
    }
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState({
        articles: res.data
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
      <div>       
        <Articles data={this.state.articles} />
        <br/>
      </div>
      <div class ="container">
       
        <h2>Create an article</h2>
        <CustomForm requestType="post" articleID={null} btnText="Create"/>
      </div>
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

