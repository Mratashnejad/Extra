import React from "react";

import { Table } from "antd";



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
    <div>
        <a>Plus  {record.name}</a>
        <a>  |   </a>
        <a>Full </a>
       
     </div>
    ),
    
  },
];

const Articles = props => {
  return (
    <div>
        <Table dataSource={props.data} columns={columns}/>
    </div>
  );
};

export default Articles;