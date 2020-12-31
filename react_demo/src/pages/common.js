// 因为业务需求，所以common.js页面作为有子页面的通用页面总出口；
// 该页面类似于admin.js页面
import React from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import Header from '../components/Header/Header'
import './common.css'

class Common extends React.Component {
	render() {
		return (
			<div>
				<Row className="simple-page">
					<Col span="24">
						<Header menuType="second" />
					</Col>
				</Row>
				<Row className="content">
					<Col span="24">
						{/* 这里专门用来接纳任何组件 */}
						{this.props.children}
					</Col>
				</Row>
			</div>
		)
	}
}

export default Common