import React from 'react'
import { Button, Radio, Rate } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';

export default class Modals extends React.Component {

  render() {


  return (
      <div>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} />
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />}>
          Download
        </Button>
        <br /><br /><br />
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">Hangzhou</Radio.Button>
          <Radio.Button value="b">Shanghai</Radio.Button>
          <Radio.Button value="c">Beijing</Radio.Button>
          <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
        <br />
    评分：<Rate />

      </div>
    )
  }

}