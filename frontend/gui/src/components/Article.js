import React from "react";

import { List, Avatar, Icon, Skeleton , Divider  } from "antd";



const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const Day = new Date();




const Articles = props => {
  
  return (
    
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
  );
};

export default Articles;