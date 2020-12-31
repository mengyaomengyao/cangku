import React from 'react'
import {Row,Col} from 'antd'
import 'antd/dist/antd.css'
import './Admin.css'
import Header from '../components/Header/Header'
import NavLeft from '../components/NavLeft/NavLeft'
import Footer from '../components/Footer/Footer'

export default class Admin extends React.Component{
    render(){
        return (
            <Row className="container">
				<Col span="4" className="nav-left">
					<NavLeft></NavLeft>
				</Col>
				
				<Col span="20" className="main">
					<Header menuName="头部"></Header>
					<Row className="content">
						{this.props.children}
					</Row>
					<Footer></Footer>
				</Col>
			</Row>
        )
    }
}











