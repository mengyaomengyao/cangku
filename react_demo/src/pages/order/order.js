import React from 'react'
import { Card, Button, Table, Form, Select, Modal } from 'antd'
import Utils from '../../utils/utils'
import { gets } from '../../resource/axios'
const FormItem = Form.Item
const Option = Select.Option

export default class Order extends React.Component {
    state = {
        list: [],
		orderInfo: {},
		orderConfirmVisble: false,
    }
    componentDidMount(){
        this.requestList();
    }
    requestList=()=>{
        gets('/orderlist').then((res)=>{
            // console.info(res.data)
            // 因为key是必须的，为毛？
            let list = res.data.result.item_list.map(function(item,index){
                item.key = index;
                return item;
            })
            this.setState({
                list
            })
        })
    }
    onRowClick=(record, index)=>{
        // console.info(record,index)
		this.setState({
			selectedRowKeys: index,
			selectedItem: record,
		})
    }
    // 订单详情
    openOrderDetail=()=>{
        let item = this.state.selectedItem;
        console.log(item);
        if(!item){
            Modal.success({
                title: '提示',
                content: "不能为空"
            })
            return false;
        }
        window.open(`/common/order/detail/${item.id}`,"_blank")
    }
	render() {
        const columns = [
			{
				title: '订单编号',
				dataIndex: 'order_sn',
			},
			{
				title: '车辆编号',
				dataIndex: 'bike_sn',
			},
			{
				title: '用户名',
				dataIndex: 'user_name',
			},
			{
				title: '手机号',
				dataIndex: 'mobile',
			},
			{
				title: '里程',
				dataIndex: 'distance',
				render(distance) {
					return distance / 1000 + 'Km'
				},
			},
			{
				title: '行驶时长',
				dataIndex: 'total_time',
			},
			{
				title: '状态',
				dataIndex: 'status',
			},
			{
				title: '开始时间',
				dataIndex: 'start_time',
			},
			{
				title: '结束时间',
				dataIndex: 'end_time',
			},
			{
				title: '订单金额',
				dataIndex: 'total_fee',
			},
			{
				title: '实付金额',
				dataIndex: 'user_pay',
			},
        ]
        let rowSelection ={
            type: 'radio',
        }
		return (
			<div>
				<Card>
					<FilterForm />
				</Card>
				<Card style={{ marginTop: 10 }}>
					<Button type="primary" onClick={this.openOrderDetail}>
						订单详情
					</Button>
					<Button
						type="danger"
						style={{ marginLeft: 10 }}
						onClick={this.handleConfirm}
					>
						结束订单
					</Button>
				</Card>
                <Card>
                    <Table
						bordered
						columns={columns}
						dataSource={this.state.list}
                        pagination={this.state.pagination}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                              onClick:  ()=>{this.onRowClick(record, index)}
                            };
                          }}
                    >
                    </Table>
                </Card>
			</div>
		)
	}
}

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
