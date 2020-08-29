import React from 'react';
import {
  message,
  Form,
  Input,
  Button
} from 'antd';

import axios from 'axios';
const FormItem = Form.Item;

class CustomForm extends React.Component {


  handleFormSubmit = (event, requestType, articleID) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    const manager = event.target.elements.manager.value;

    switch (requestType) {
      case 'post':
        return axios.post('http://127.0.0.1:8000/api/', {
            title: title,
            content: content,
            manager: manager
        })
      
          .then(res => message.success("Data is Successfuly added" ))
          .catch(error => message.error("somethings is wrong")&& console.log(error));
      
      case 'put':
        return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title: title,
            content: content,
            manager: manager
          })
          .then(res => message.success("Data is Successfuly updated" ))
          .catch(error => message.error("somethings is wrong")&& console.log(error));
      
        break;
      default:

    }
  }

  render() {
    return ( <
      div >
      <
      Form onSubmit = {
        (event) => this.handleFormSubmit(
          event,
          this.props.requestType,
          this.props.articleID
        )
      } >
      <
      FormItem label = "Title" >
      <
      Input name = 'title'
      placeholder = "Enter title here :" / >
      <
      /FormItem> <
      FormItem label = "Content" >
      <
      Input name = 'content'
      placeholder = "Enter some content :" / >
      <
      /FormItem> <
      FormItem label = "Manager" >
      <
      Input name = 'manager'
      placeholder = "Enter manager name :" / >
      <
      /FormItem> <
      FormItem >
      <
      Button type = "primary"
      htmlType = "Submit" > {
        this.props.btnText
      } < /Button> <
      /FormItem> <
      /Form> <
      /div>
    );
  }
}

export default CustomForm;