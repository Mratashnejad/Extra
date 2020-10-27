import {
  Col, Row,
  message,
  Button,
  Card
} from "antd";
import axios from "axios";
import React from "react";
import Articles from "../components/Article";

import CustomForm from "../components/Form";

class ArticleDetail extends React.Component {
  state = {
    article: {}
  };
  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then(res => {
      this.setState({
        article: res.data
      });
    });
  }

  handleDelete = (event) => {
    const articleID = this.props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleID}/`)
      .then(res => message.erorr("Data is Successfuly deleted"))
      .catch(error => message.error("somethings is wrong") && console.log(error));
    this.props.history.push('/');
    this.forceUpdate();
  }

  render() {
    return (
    <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title = {this.state.article.title} >
            <p>Manager Name :{this.state.article.manager} </p>
            <p>Date & Time :{this.state.article.datetime} </p>
            <p>quantity  :{this.state.article.quantity} </p>
            <p>gender  :{this.state.article.gender} </p>
            <p>lable  :{this.state.article.lable} </p>
            <p>language  :{this.state.article.language} </p>
          </Card > 
        </Col>
      </Row>
      <br / >
      <CustomForm requestType = "put"
      articleID = {
        this.state.article.id
      }
      btnText = "Update" / >
      <form onSubmit = {
        this.handleDelete
      } >
      <Button type = "danger"
            htmlType="submit" > Delete
            </Button> 
            </form > 
      </div>
    );
  }
}

export default ArticleDetail;