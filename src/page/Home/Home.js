// Home.js
import React from "react";
import './Home.css';
import {ProCard} from "@ant-design/pro-components";
import {DynamicClock} from "../../components/DynamicClock/DynamicClock";
import SimpleSample from "./SimpleSample/SimpleSample";
import ComplexSample from "./ComplexSample/ComplexSample";
import ChartSample from "./ChartSample/ChartSample";

/**
 * 项目 - 首页
 */
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,

    }
  }

  render() {
    return (
      <div className={'app-home'}>
      {/* 模拟样例展示、描述以及快捷入口 */}
        <ProCard
          className={'app-home-content'}
          direction={"row"}
          title={'模拟样例'}
          tooltip={'用于模拟样例的展示、描述以及提供快捷入口'}
          extra={<DynamicClock />}
          headerBordered={true}
          wrap={true}
          ghost={true}
        >
          <ProCard
            className={'app-home-content-simple'}
            title={'基础样例'}
            tooltip={'Ant Design v5 框架组件的简单使用'}
            headerBordered={true}
            collapsible={true}
            defaultCollapsed={true}
            gutter={[8,8]}
            colSpan={24}
          >
            <SimpleSample />
          </ProCard>
          <ProCard
            className={'app-home-content-complex'}
            title={'复杂样例'}
            tooltip={'Ant Design Pro pro-components 高级组件的使用'}
            headerBordered={true}
            collapsible={true}
            defaultCollapsed={true}
            colSpan={24}
          >
            <ComplexSample />
          </ProCard>
          <ProCard
            className={'app-home-content-chart'}
            title={'图表样例'}
            tooltip={'EChart v4|v5 图表组件的使用'}
            headerBordered={true}
            collapsible={true}
            defaultCollapsed={true}
            colSpan={24}
          >
            <ChartSample />
          </ProCard>
        </ProCard>
      </div>
    );
  }
}