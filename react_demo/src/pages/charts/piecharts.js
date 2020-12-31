import React from "react";
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/pie";

// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

export default class PieCharts extends React.Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));

    myChart.setOption({
      title: { text: "ECharts" },
      series: [
        {
          name: "访问来源",
          type: "pie", // 设置图表类型为饼图
          radius: "55%", // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
          data: [
            // 数据数组，name 为数据项名称，value 为数据项值
            { value: 235, name: "视频广告" },
            { value: 274, name: "联盟广告" },
            { value: 310, name: "邮件营销" },
            { value: 335, name: "直接访问" },
            { value: 400, name: "搜索引擎" },
          ],
        },
      ],
    });
  }
  render() {
    return <div id="main" style={{ width: 600, height: 400 }}></div>;
  }
}
