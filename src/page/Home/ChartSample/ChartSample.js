// ChartSample.js
import React from "react";
import {ProCard} from "@ant-design/pro-components";

/**
 * 图表样例展示、描述、入口
 */
export default class ChartSample extends React.Component {
  render() {
    return (
      <ProCard ghost={true} direction={"row"} gutter={[8,8]} wrap={true}>
        <ProCard
          title={'图表-1'}
          extra={'GO'}
          bordered={true}
          colSpan={6}
        >
          1
        </ProCard>
      </ProCard>
    );
  }
}