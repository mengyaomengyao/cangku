import React from 'react'
import {
	Card,
	Button,
	Form,
	Input,
	Modal,
	Table,
	Select,
	Radio,
	DatePicker,
} from 'antd'
import {
	PlusOutlined,
	DeleteOutlined,
	EditOutlined,
	GithubOutlined,
} from '@ant-design/icons'
import { gets } from '../../resource/axios'
import Searchs from '../../components/Search/Search'
import Axios from 'axios'
const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group

export default class Users extends React.Component {
	state = {}
	componentDidMount() {
		this.requestList()
	}
	requestList = () => {
		gets('/userlist').then((res) => {
			// console.info(res.data.result.item_list)
			let list = res.data.result.item_list.map(function (item, index) {
				item.key = index
				return item
			})
			this.setState({
				list,
			})
		})
	}
	// 操作员工
	handleOperator = (type) => {
		// 因为我要点击编辑时，看你是否点击了用户，去判断是否为空
		let item = this.state.selectedItem
		if (type === 'create') {
			this.setState({
				title: '创建员工',
				isVisible: true,
				userInfo: {},
			})
		} else if (type === 'edit') {
			// 判断用户是否勾选，当没有勾选时，弹出对话框
			if (!item) {
				Modal.warning({
					title: '警告',
					content: '你得勾选用户',
				})
				return
			}
			this.setState({
				title: '编辑用户',
				isVisible: true,
				userInfo: item,
				type,
			})
		} else if (type === 'detail') {
			if (!item) {
				Modal.warning({
					title: '警告',
					content: '你得勾选用户',
				})
				return
			}
			this.setState({
				title: '用户信息',
				isVisible: true,
				userInfo: item,
				type,
			})
		} else if (type === 'delete') {
			if (!item) {
				Modal.warning({
					title: '警告',
					content: '你得勾选用户',
				})
				return
			}
			// 这里应该去ajax一个接口，标准写法
			// ajax.get('xxx.php',{id: 3}).then((res)=>{
			//     if(res.data.result === 1){   表示成功删除
			//         this.requestList()  将获取列表值得方法重新运行一下，页面局部刷新一下
			//     }
			// })
			// 非标准写法
			this.setState({
				title2: '删除信息',
				isVisible2: true,
				userInfo2: item,
			})
		}
	}
	// 点击创建员工事件
	handleSubmit = () => {
		// 逻辑：前台获取form里面的所有值，通过axios发送给后台，后台接收到你发送的值，给你一个返回值，你根据这个返回值来判断是否成功，若成功，则刷新页面，你刚才添加的信息就在列表上呈现了
		// 获取到用户输入的值？
		let txt = document.getElementById('txt').value
		// console.info(txt)
		this.setState({
			isVisible: false,
		})
		// axios.get()....
    }
    filterSubmit = (val) => {
        console.log('子组件传回来的值:', val);
        // 应该去axios了吧。
	}
	render() {
		let columns = [
			{
				title: 'id',
				dataIndex: 'id',
			},
			{
				title: '用户名',
				dataIndex: 'username',
			},
			{
				title: '性别',
				dataIndex: 'sex',
				render(sex) {
					return sex === 1 ? '男' : '女'
				},
			},
			{
				title: '状态',
				dataIndex: 'state',
				render(state) {
					let obj = {
						1: '咸鱼一条',
						2: '风华浪子',
						3: '北大才子一枚',
						4: '百度FE',
						5: '创业者',
					}
					return obj[state]
				},
			},
			{
				title: '爱好',
				dataIndex: 'interest',
				render(interest) {
					let config = {
						1: '游泳',
						2: '打篮球',
						3: '踢足球',
						4: '跑步',
						5: '爬山',
						6: '骑行',
						7: '桌球',
						8: '麦霸',
					}
					return config[interest]
				},
			},
			{
				title: '婚否',
				dataIndex: 'isMarried',
				render(isMarried) {
					return isMarried ? '已婚' : '未婚'
				},
			},
			{
				title: '生日',
				dataIndex: 'birthday',
			},
			{
				title: '联系地址',
				dataIndex: 'address',
			},
			{
				title: '早起时间',
				dataIndex: 'time',
			},
		]
		let rowSelection = {
			type: 'radio',
			onSelect: (record) => {
				// console.info(record)
				this.setState({
					selectedItem: record,
				})
			},
        }
        let footer={}
        if(this.state.type==='detail'){
            footer = {
                footer: null
            }
        }
		return (
			<div>
				<Searchs nice="a" filterSubmit={this.filterSubmit}></Searchs>
				<Card>
					<Button
						type="primary"
						icon={<PlusOutlined />}
						onClick={() => this.handleOperator('create')}
					>
						创建员工
					</Button>
					<Button
						icon={<EditOutlined />}
						onClick={() => this.handleOperator('edit')}
					>
						编辑员工
					</Button>
					<Button
						icon={<GithubOutlined />}
						onClick={() => this.handleOperator('detail')}
					>
						员工详情
					</Button>
					<Button
						type="danger"
						icon={<DeleteOutlined />}
						onClick={() => this.handleOperator('delete')}
					>
						删除员工
					</Button>
				</Card>
				<Card>
					<Table
						bordered
						columns={columns}
						dataSource={this.state.list}
						rowSelection={rowSelection}
					/>
				</Card>
				<Modal
					title={this.state.title}
					visible={this.state.isVisible}
					onOk={this.handleSubmit}
					width={800}
					onCancel={() => {
						this.setState({
							isVisible: false,
							userInfo: {},
						})
					}}
					{...footer}
				>
					<UserForm
						type={this.state.type}
						userInfo={this.state.userInfo}
					></UserForm>
				</Modal>
				{/* 专门给删除用户的模态框 */}
				<Modal
					title={this.state.title2}
					visible={this.state.isVisible2}
					onOk={this.handleSubmit2}
					width={500}
					onCancel={() => {
						this.setState({
							isVisible2: false,
						})
					}}
				>
					亲，确定要删除我吗？
				</Modal>
			</div>
		)
	}
	// 删除用户方法
	handleSubmit2 = () => {
		let kk = this.state.userInfo2.key
		let arr = [...this.state.list]
		arr.splice(kk, 1)
		this.setState({
			isVisible2: false,
			list: arr,
		})
	}
}
// 弹出模态框组件
class UserForm extends React.Component {
	render() {
		const formItemLayout = {
			labelCol: { span: 5 },
			wrapperCol: { span: 16 },
		}
		let userInfo = this.props.userInfo
		let type = this.props.type
		return (
			<div>
				<Form layout="horizontal">
					<FormItem label="姓名">
						{type === 'detail' ? (
							userInfo.username
						) : (
							<Input
								type="text"
								id="txt"
								value={userInfo.username}
								placeholder="请输入姓名"
							/>
						)}
					</FormItem>
					<FormItem label="性别">
						<RadioGroup value={userInfo.sex}>
							<Radio value={1}>男</Radio>
							<Radio value={2}>女</Radio>
						</RadioGroup>
					</FormItem>
					<FormItem label="状态">
						<Select value={userInfo.state}>
							<Option value={1}>咸鱼一条</Option>
							<Option value={2}>风华浪子</Option>
							<Option value={3}>北大才子一枚</Option>
							<Option value={4}>百度FE</Option>
							<Option value={5}>创业者</Option>
						</Select>
					</FormItem>
					<FormItem label="生日" {...formItemLayout}>
						<DatePicker />
					</FormItem>
					<FormItem label="联系地址" {...formItemLayout}>
						<Input.TextArea
							value={userInfo.address}
							rows={3}
							placeholder="请输入联系地址"
						/>
					</FormItem>
				</Form>
			</div>
		)
	}
}
