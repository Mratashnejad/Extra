import React from "react";

import { Table, Tag, Space , List, Avatar, Icon, Skeleton, } from "antd";





const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const Day = new Date();


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
    // render: lable => (
    //   <>
    //     {tags.map(tag => {
    //       let color = tag.length > 5 ? 'geekblue' : 'green';
    //       if (tag === 'loser') {
    //         color = 'volcano';
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       );
    //     })}
    // </>
    // ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
    <div>
        <a>Invite {record.name}</a>
        <a>Delete</a>
     </div>
    ),
    
  },
];

const Articles = props => {
  return (
    <div>

    <div>
        <Table dataSource={props.data} columns={columns} 
        
        />
    </div>
<div>
    
    
    <List
      itemLayout="vertical"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 10
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[ 
           <a key="more" href={`/extra/${item.id}`}>More</a>,<a key="reserve">Reserve</a>
          ]}
        >
            <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={`/extra/${item.id}`}>{item.title}</a>}
            description={item.manager}
          />
        </List.Item>
      )}
    />
      </div>
      </div>

    
  );
};

export default Articles;