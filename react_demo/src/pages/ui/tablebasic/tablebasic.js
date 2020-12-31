import React from 'react'
import { Card, Space, Button } from 'antd'
import {gets} from "../../../resource/axios"

export default class Tablebasic extends React.Component {
    state={
        arrlist: []
    }
    huoqu=()=>{
        gets("https://www.fastmock.site/mock/94867ed68bcfbfc0571a59bb336319f2/demo1/qw").then((res)=>{
            // console.log(res.data.data);
            this.setState({
                arrlist: res.data.data
            })
        }).catch((err)=>{
            console.info(err)
        })
    }
    createLi=()=>{
        let newList = [];
        this.state.arrlist.map(function(item){
           return newList.push(<li>{item.name}</li>)
        })
        return newList;
    }
	render() {
		return (
			<div>
				<Card title="axios去ajax后台数据">
					<Button type="danger" onClick={this.huoqu}>
						点击获取后台数据
					</Button>
					<Space size="middle">
						<ul>{this.createLi()}</ul>
					</Space>
				</Card>
			</div>
		)
	}
}
