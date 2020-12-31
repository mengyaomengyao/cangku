import React from 'react';
import { Table, Tag, Space } from 'antd';

export default class Tablehigh extends React.Component {
    render() {
        const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '地址',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: '标签',
              key: 'tags',
              dataIndex: 'tags',
              render: tags => (
                <>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                  <a>Invite {record.name}</a>
                  <a>Delete</a>
                </Space>
              ),
            },
            {
                title: 'degree',
                key: 'degree',
                dataIndex: 'degree',
                render: (degree) => (
                  <div>
                    {degree.map(index => {
                      let color = index > 45 ? 'red' : 'green';
                    
                      return (
                        <Tag color={color} key={degree}>
                          {index}
                        </Tag>
                      );
                    })}
                  </div>
                ),
              },
          
          {
            title: 'city',
            key: 'city',
            dataIndex: 'city',
            render: (city) => (
              <div>
                {city.map(index => {
                  let color = index==='中国'  ? 'red' : 'green';
                
                  return (
                    <Tag color={color} key={city}>
                      {index}
                    </Tag>
                  );
                })}
              </div>
            ),
          }
      ];
          
          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: '美国',
              tags: ['nice', 'developer'],
              degree:['20','54','12'],
              city:['中国']
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: '新加坡',
              tags: ['loser'],
              degree:['46','34','45'],
              city:['俄罗斯']
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: '俄罗斯',
              tags: ['cool', 'teacher'],
              degree:['80','24','54'],
              city:['韩国']
            },
          ];
        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

