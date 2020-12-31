import React from 'react'
import { Card, Button, Table, Form, Select, Modal, message } from 'antd'
import Utils from '../../utils/utils'
import { gets } from '../../resource/axios'
const FormItem = Form.Item
const Option = Select.Option

// 客户搜索区域
class FilterForm extends React.Component {
	render() {
		return (
			<Form layout="inline">
				<FormItem label="城市">
					<Select style={{ width: 100 }} placeholder="全部">
						<Option value="">全部</Option>
						<Option value="1">北京市</Option>
						<Option value="2">天津市</Option>
						<Option value="3">深圳市</Option>
					</Select>
				</FormItem>

				<FormItem label="用车模式">
					<Select style={{ width: 120 }} placeholder="全部">
						<Option value="">全部</Option>
						<Option value="1">指定停车点模式</Option>
						<Option value="2">禁停区模式</Option>
					</Select>
				</FormItem>
				<FormItem label="营运模式">
					<Select style={{ width: 80 }} placeholder="全部">
						<Option value="">全部</Option>
						<Option value="1">自营</Option>
						<Option value="2">加盟</Option>
					</Select>
				</FormItem>
				<FormItem label="加盟商授权状态">
					<Select style={{ width: 100 }} placeholder="全部">
						<Option value="">全部</Option>
						<Option value="1">已授权</Option>
						<Option value="2">未授权</Option>
					</Select>
				</FormItem>
				<FormItem>
					<Button type="primary" style={{ margin: '0 20px' }}>
						查询
					</Button>
					<Button>重置</Button>
				</FormItem>
			</Form>
		)
	}
}
export default class City extends React.Component {
	state = {
		xx: false,
        list: [],
        isShowOpenCity: false
	}
	componentDidMount() {
		this.requestList()
    }
    handleSubmit=()=>{
        this.setState({
            isShowOpenCity: true
        })
    }
    // 开通城市
	handleOpenCity = () => {
		this.setState({
			isShowOpenCity: true,
		})
	}
	// 默认请求我们的接口数据
	requestList = () => {
		gets('/city').then((res) => {
			this.setState({
				xx: true,
			})
			console.info(res.data)
			let list = res.data.map((item, index) => {
				item.key = index
				return item
			})
			this.setState({
				list: list,
				pagination: Utils.pagination(res, (current) => {
					this.params.page = current
					this.requestList()
				}),
			})
		})
	}
	okok = () => {
		console.info('OK')
		this.setState({
			xx: false,
		})
	}
	render() {
		let columns = [
			{
				title: '城市field',
				dataIndex: 'field',
			},
			{
				title: '状态',
				dataIndex: 'label',
			},
			{
				title: '用车模式',
				dataIndex: 'initialValue',
				render(initialValue) {
					return initialValue == 1 ? '停车点' : '禁停区'
				},
			},
			{
				title: '营运模式',
				dataIndex: 'type',
				render(type) {
					return type == 'SELECT' ? '自营' : '加盟'
				},
			},
			{
				title: '授权加盟商',
				dataIndex: 'shouquan',
				render(shouquan) {
					return shouquan == '11' ? '授权' : '未授权'
				},
			},
			{
				title: '城市开通时间',
				dataIndex: 'open_time',
			},
			{
				title: '操作时间',
				dataIndex: 'update_time',
				render: Utils.formateDate,
			},
			{
				title: '操作人',
				dataIndex: 'sys_user_name',
			},
		]
		return (
			<div>
				<Modal title="OK提示" visible={this.state.xx} onOk={this.okok}>
					你已经成功获取到机密文件了!
				</Modal>
				<div>
					<FilterForm></FilterForm>
				</div>
                <div>
                    <Button type="danger" onClick={this.handleOpenCity}>开通城市</Button>
                    <Modal
                        visible={this.state.isShowOpenCity}
                        onOk={this.handleSubmit}
                    >
                        <OpenCityForm />
                    </Modal>
                </div>
				<div className="content-wrap">
					<Table
						bordered
						columns={columns}
						dataSource={this.state.list}
						pagination={{pageSize:3}}
					/>
				</div>
			</div>
		)
	}
}
// 弹出框区域
class OpenCityForm extends React.Component {
	render() {
		// 用于页面布局的
		const formItemLayout = {
			labelCol: {
				span: 5,
			},
			wrapperCol: {
				span: 19,
			},
		}
		return (
			<Form layout="horizontal">
				<FormItem label="选择城市" {...formItemLayout}>
						<Select style={{ width: 100 }}>
							<Option value="">全部</Option>
							<Option value="1">北京市</Option>
							<Option value="2">天津市</Option>
						</Select>
				</FormItem>
				<FormItem label="营运模式" {...formItemLayout}>
					<Select style={{ width: 100 }}>
						<Option value="1">自营</Option>
						<Option value="2">加盟</Option>
					</Select>
				</FormItem>
				<FormItem label="用车模式" {...formItemLayout}>
					<Select style={{ width: 100 }}>
						<Option value="1">指定停车点</Option>
						<Option value="2">禁停区</Option>
					</Select>
				</FormItem>
			</Form>
		)
	}
}
