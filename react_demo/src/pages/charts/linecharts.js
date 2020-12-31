import React from "react";
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/line";

// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

export default class LineCharts extends React.Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));

    myChart.setOption({
      title: { text: "ECharts" },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "line",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }
  render() {
    return <div id="main" style={{ width: 600, height: 400 }}></div>;
  }
}
