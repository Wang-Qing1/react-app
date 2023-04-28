// ComplexSample.js
import React from "react";
import {ProCard} from "@ant-design/pro-components";

/**
 * 复杂样例展示、描述、入口
 */
export default class ComplexSample extends React.Component {
  render() {
    return (
      <ProCard ghost={true} direction={"row"} gutter={[8,8]} wrap={true}>
        <ProCard
          title={'复杂-1'}
          extra={'Go'}
          bordered={true}
          colSpan={6}
        >
          1
        </ProCard>
      </ProCard>
    );
  }
}