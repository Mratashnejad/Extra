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
    <span>
        <a>Plus  {record.name}</a>
        <a>  |   </a>
        <a>Full </a>
        </span>
  //     <span>
  //     <Icon type="edit" title="编辑" onClick={() => this.showUpdateDialog(job)} />
  //     <Icon type="close" title="删除" style={{ color: '#ee6633', marginLeft:12}} onClick={() => this.deleteConfirm(job)} />
  // </span>
    ),
    
  },
];


const Articles = props => {
  return (
    <div>
      <Table
        style={{ marginTop: 10 }}
        dataSource={props.data}
        columns={columns}
        pagination={false} />
    </div>
  );
};

export default Articles;