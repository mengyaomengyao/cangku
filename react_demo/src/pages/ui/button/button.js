import React from 'react'
import { Button } from 'antd';
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import './button.css'

export default class Buttons extends React.Component {
    render() {
        return (
            <Row>
                <Col span="24">
                    <Button type="primary">Primary Button</Button>
                    <Button>Default Button</Button>
                    <Button type="dashed">Dashed Button</Button>
                    <br />
                    <Button type="text">Text Button</Button>
                    <Button type="link">Link Button</Button>
                </Col>
            </Row>
        )
    }
}


