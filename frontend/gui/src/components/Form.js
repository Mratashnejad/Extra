import React from 'react';
import {
  message,
  Form,
  Input,
  Button
} from 'antd';

import axios from 'axios';
import { connect } from 'react-redux';
const FormItem = Form.Item;

class CustomForm extends React.Component {


  handleFormSubmit = (event, requestType, articleID) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    // const content = event.target.elements.content.value;
    const manager = event.target.elements.manager.value;
    const datetime = event.target.elements.datetime.value;
    const quantity = event.target.elements.quantity.value;
    const gender = event.target.elements.gender.value;
    const lable = event.target.elements.lable.value;
    const language = event.target.elements.language.value;
    axios.defaults.headers = {
      "content-type": "Application/json",
      Authorization : this.props.token
      
    }
    switch (requestType) {
      case 'post':
        return axios.post('http://127.0.0.1:8000/api/', {
            title: title,
            manager: manager,
            datetime: datetime,
            quantity: quantity,
            gender: gender,
            lable: lable,
            language: language,
            // content: content,
            
          })

          .then(res => message.success("Data is Successfuly addeda"))
          .catch(error => message.error("somethings is wrong") && console.log(error));

      case 'put':
        return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title: title,
            manager: manager,
            datetime: datetime,
            quantity: quantity,
            gender: gender,
            lable: lable,
            language: language,
          })
          .then(res => message.success("Data is Successfuly updated"))
          .catch(error => message.error("somethings is wrong") && console.log(error));

      default:
        return <h1>No project match</h1>

    }
  }

  render() {
    return (
      <div>
        <Form onSubmit = {
          (event) => this.handleFormSubmit(
            event,
            this.props.requestType,
            this.props.articleID)} >
              
              <FormItem label = "Title" >
              <Input name = 'title'
              placeholder = "Enter title here :" / >
              </FormItem>
              <FormItem label="Manager" >
              <Input name = 'manager'
              placeholder = "Enter manager Name" / >
              </FormItem>

              <FormItem label="Date and Time" >
              <Input name = 'datetime'
              placeholder = "Enter datetime" / >
              </FormItem>
                  
              <FormItem label = "quantity" >
              <Input name = 'quantity'
              placeholder = "Enter quantity" / >
              </FormItem>


              <FormItem label = "gender" >
              <Input name = 'gender'
              placeholder = "Enter gender" / >
              </FormItem>

                        
              <FormItem label = "lable" >
              <Input name = 'lable'
              placeholder = "Enter lable" / >
              </FormItem>

              <FormItem label = "language" >
              <Input name = 'language'
              placeholder = "Enter language" / >
              </FormItem>

              <FormItem >
              <Button type = "primary"
              htmlType = "Submit" > {this.props.btnText}</Button>
              </FormItem >
        </Form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token :state.token 
  }
}

export default connect(mapStateToProps)(CustomForm);