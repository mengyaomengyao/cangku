import React from "react";
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/sunburst";

// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

export default class Sunburst extends React.Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    var data = [{
        name: 'Grandpa',
        children: [{
            name: 'Uncle Leo',
            value: 15,
            children: [{
                name: 'Cousin Jack',
                value: 2
            }, {
                name: 'Cousin Mary',
                value: 5,
                children: [{
                    name: 'Jackson',
                    value: 2
                }]
            }, {
                name: 'Cousin Ben',
                value: 4
            }]
        }, {
            name: 'Father',
            value: 10,
            children: [{
                name: 'Me',
                value: 5
            }, {
                name: 'Brother Peter',
                value: 1
            }]
        }]
    }, {
        name: 'Nancy',
        children: [{
            name: 'Uncle Nike',
            children: [{
                name: 'Cousin Betty',
                value: 1
            }, {
                name: 'Cousin Jenny',
                value: 2
            }]
        }]
    }];
    
    myChart.setOption({
      title: { text: "ECharts" },
      series: {
        type: 'sunburst',
        // highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '90%'],
        label: {
            rotate: 'radial'
        }
    }
    });
  }
  render() {
    return <div id="main" style={{ width: 600, height: 400 }}></div>;
  }
}
