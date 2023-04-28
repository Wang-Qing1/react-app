// SimpleSample.js
import React from "react";
import {ProCard} from "@ant-design/pro-components";

/**
 * 简单样例展示、描述、入口
 */
export default class SimpleSample extends React.Component {

  render() {
    return (
      <ProCard ghost={true} direction={"row"} gutter={[8,8]} wrap={true}>
        <ProCard
          title={'基础-1'}
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