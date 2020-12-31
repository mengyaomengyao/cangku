import React from 'react'
import { Card, Button, Table, Form, Select, Modal } from 'antd'
import { gets } from '../../resource/axios'
import logo1 from '../../resource/assets/start_point.png'
import logo2 from '../../resource/assets/end_point.png'
import './orderdetail.css'

export default class OrderDetail extends React.Component {
	state = {}
	componentDidMount() {
		let orderId = this.props.match.params.orderId
		if (orderId) {
			this.getDetailInfo(orderId)
		}
	}
	getDetailInfo = (orderId) => {
		gets('/project', {
			orderId: orderId,
		}).then((res) => {
			this.setState({
				orderInfo: res.data.result,
			})
			this.renderMap(res.data.result)
		})
	}
	renderMap = (result) => {
		this.map = new window.BMap.Map('orderDetailMap')
		// 创建地图实例
		var point = new window.BMap.Point(116.404, 39.915);
		// 创建点坐标
		this.map.centerAndZoom('西安', 15)
		var marker = new window.BMap.Marker(point) // 创建标注
		this.map.addOverlay(marker)
		// 初始化地图，设置中心点坐标和地图级别
		// 添加地图控件
		this.addMapControl()
		// 调用路线图绘制方法，有问题..................................
		this.drawBikeRoute(result.position_list)
	}
	addMapControl = () => {
		this.map.addControl(
			new window.BMap.NavigationControl({
				type: window.BMAP_NAVIGATION_CONTROL_SMALL,
				anchor: window.BMAP_ANCHOR_TOP_RIGHT,
			})
		)
	}
	drawBikeRoute = (positionList) => {
		let startPoint = ''
		let endPoint = ''
		if (positionList.length > 0) {
			let first = positionList[0]
			let last = positionList[positionList.length - 1]
			startPoint = new window.BMap.Point(first.lon, first.lat)
			let startIcon = new window.BMap.Icon(
				{ logo1 },
				new window.BMap.Size(16, 22),
				{
					imageSize: new window.BMap.Size(36, 42),
					anchor: new window.BMap.Size(36, 42),
				}
			)

			let startMarker = new window.BMap.Marker(startPoint, {
				icon: startIcon,
			})
			this.map.addOverlay(startMarker)

			endPoint = new window.BMap.Point(last.lon, last.lat)
			let endIcon = new window.BMap.Icon(
				{ logo2 },
				new window.BMap.Size(36, 42),
				{
					imageSize: new window.BMap.Size(36, 42),
					anchor: new window.BMap.Size(18, 42),
				}
			)
			let endMarker = new window.BMap.Marker(endPoint, { icon: endIcon })
			this.map.addOverlay(endMarker)

			// 连接路线图
			let trackPoint = []
			for (let i = 0; i < positionList.length; i++) {
				let point = positionList[i]
				trackPoint.push(new window.BMap.Point(point.lon, point.lat))
			}

			let polyline = new window.BMap.Polyline(trackPoint, {
				strokeColor: '#1869AD',
				strokeWeight: 3,
				strokeOpacity: 1,
			})
			this.map.addOverlay(polyline)
			this.map.centerAndZoom(endPoint, 11)
		}
	}
	render() {
		const info = this.state.orderInfo || {}
		return (
			<div>
				<Card>
					<div id="orderDetailMap" className="order-map"></div>
					<div className="detail-items">
						<div className="item-title">基础信息</div>
						<ul className="detail-form">
							<li>
								<div className="detail-form-left">用车模式</div>
								<div className="detail-form-content">
									{info.mode === 1 ? '服务区' : '停车点'}
								</div>
							</li>
							<li>
								<div className="detail-form-left">订单编号</div>
								<div className="detail-form-content">
									{info.order_sn}
								</div>
							</li>
							<li>
								<div className="detail-form-left">车辆编号</div>
								<div className="detail-form-content">
									{info.bike_sn}
								</div>
							</li>
							<li>
								<div className="detail-form-left">用户姓名</div>
								<div className="detail-form-content">
									{info.user_name}
								</div>
							</li>
							<li>
								<div className="detail-form-left">手机号码</div>
								<div className="detail-form-content">
									{info.mobile}
								</div>
							</li>
						</ul>
					</div>
					<div className="detail-items">
						<div className="item-title">行驶轨迹</div>
						<ul className="detail-form">
							<li>
								<div className="detail-form-left">行程起点</div>
								<div className="detail-form-content">
									{info.start_location}
								</div>
							</li>
							<li>
								<div className="detail-form-left">行程终点</div>
								<div className="detail-form-content">
									{info.end_location}
								</div>
							</li>
							<li>
								<div className="detail-form-left">行驶里程</div>
								<div className="detail-form-content">
									{info.distance / 1000}公里
								</div>
							</li>
						</ul>
					</div>
				</Card>
			</div>
		)
	}
}
