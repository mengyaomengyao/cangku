import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../resource/assets/06.jpg'
// 资源文件一般放在public文件夹中
import menuList from '../../resource/menuConfig'
import { Menu } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
import './NavLeft.less'
const { SubMenu } = Menu //子目录

class NavLeft extends React.Component {
	state = {}
	componentDidMount() {
		const menuTreeNode = this.renderMenu(menuList)
		this.setState({
			menuTreeNode
        })
	}
	renderMenu = (menuList) => {
		return menuList.map((item)=> {
			// 这里应该写JS的逻辑，就是关于树结构的函数递归
			if (item.children) {
				return (
					<SubMenu
						key={item.key}
						icon={<AppstoreOutlined />}
						title={item.title}
					>
						{this.renderMenu(item.children)}
					</SubMenu>  
                )
			}
			return <Menu.Item key={item.key}>
                <Link to={item.key}>{item.title}</Link>
            </Menu.Item>
		})
	}
	render() {
		return <div className="logo">
         
            <Menu theme="dark">{this.state.menuTreeNode}</Menu>
            <Link to="/logoin">跳转登录页面</Link>
        </div>
	}
}
export default NavLeft
