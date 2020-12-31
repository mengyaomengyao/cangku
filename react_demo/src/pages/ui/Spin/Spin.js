import React from 'react'
import 'antd/dist/antd.css'
import { Card, Space, Spin,Alert } from 'antd'

export default class Buttons extends React.Component {
	render() {
		return (
			<div>
				<Card title="加载框">
					<Space size="large">
						<Spin size="small" />
						<Spin />
						<Spin size="large" />
					</Space>
				</Card>
				<Card title="信息提示框">
					<Spin tip="Loading...">
						<Alert
							message="9月份考勤22天，请假15天，实发工资250元，请笑纳。"
							description="Further details about the context of this alert."
							type="info"
						/>
					</Spin>
                    <Space>
                    <Alert
                        message="同学们，加油"
                        type="warning"
                        closable
                        />
                    </Space>
				</Card>
			</div>
		)
	}
}
