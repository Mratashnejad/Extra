import React from "react";

import { Table, Tag, Space, List, Avatar, Icon, Skeleton, } from "antd";





const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const Day = new Date();


const columns = [
  {
    title: 'Shift',
    dataIndex: 'shift',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
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
    title: 'Tags',
    dataIndex:'tags',
    key: 'tags',
    // render: tags => (
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
    
  },
];

const data = [
  {
    key: '1',
    shift: 'Sagris',
    date: '10/28/2020', 
    quantity: 'two',
    gender: ['Male', 'Female'],
    language: 'English',
    tags: 'Urgent',
    action:'none',
  },
  {
    key: '2',
    shift: 'Tigran',
    date: '10/28/2020', 
    quantity: 'two',
    gender: ['Male'],
    language: 'persian',
    tags: 'Urgent',
    action:'none',
  },
  {
    key: '3',
    shift: 'Marika',
    date: '10/28/2020', 
    quantity: 'two',
    gender: ['Female'],
    language: 'russian',
    tags: 'Urgent',
    action:'none',
  },
];  


const Articles = props => {
  return (
    <div>

    <div>
      <Table columns={columns} dataSource={data} />
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