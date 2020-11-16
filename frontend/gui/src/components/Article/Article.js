import React from "react";

                     
import { Table , Button,Icon,Modal } from "antd";

import CustomForm from "../Form";

const columns = [
  {
    title: 'No',
    dataIndex: 'id',
    key:'id',
  },
  {
    title: 'Shift',
    dataIndex: 'manager',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'datetime',
    key: 'date',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key:'quantity',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key:'gender',
  },
  {
    title: 'Language',
    dataIndex: 'language',
    key:'language',
  },
  {
    title: 'lable',
    dataIndex:'lable',
    key: 'lable',
  },
  {
    title: 'Status',
    key: 'Status',
    render: (text, record) => (
      <span>
      <Icon type="edit" title="Edit"/>
      <Icon type="close" title="Close" style={{ color: '#ee6633', marginLeft:12}} />
      </span>
    ),
    
  },
];


const Articles = props => {
  return (
               
    <div style={{ textAlign: 'right'}} >
      <Button type="primary" icon="plus" onClick={<CustomForm />}>add Extra
         </Button>
      <Table
        style={{ marginTop: 10 }}
        dataSource={props.data}
        columns={columns}
        pagination={false} />
    </div>
    
  );
};

export default Articles;