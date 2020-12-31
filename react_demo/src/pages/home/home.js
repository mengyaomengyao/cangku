import React from 'react'
import './home.less'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export default class Home extends React.Component {
    render() {
        return (
            <div className="home-wrap">
                <Avatar size={64} icon={<UserOutlined />} />
                
            </div>
        )
    }
} 