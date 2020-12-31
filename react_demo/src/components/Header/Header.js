import React from 'react'
import { Row, Col } from 'antd'
import './Header.less'
import Util from '../../utils/utils'

class Header extends React.Component{
    constructor(){
        super();
        this.state={
            userName: "孟瑶"
        }
    }
    componentWillMount(){
        setInterval(() => {
            let sysTime = Util.formateDate(new Date());
            this.setState({
                sysTime
            })
        }, 1000);
    }
    render(){
        let {menuName} = this.props;
        return (
        <div className="header">
            <Row className="header-top">
                <Col span="24">
                        <span>欢迎：{this.state.userName}</span>
						<a href="xxx">退出</a>
                </Col>
            </Row>
            <Row className="breadcrumb">
                <Col span="6" className="breadcrumb-title">
                    {menuName || '首页'}
                </Col>
                <Col span="18" className="weather">
                        <span className="date">{this.state.sysTime}</span> &nbsp;
						{/* <span>去用百度天气API来免费获取接口</span> */}
						<span className="weather-detail">扬沙转多云</span>
                </Col>
            </Row>
        </div>
    )
    }
    
}
export default Header;
