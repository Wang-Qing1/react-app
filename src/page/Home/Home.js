// Home.js
import React from "react";
import './Home.css';
import {ProCard} from "@ant-design/pro-components";
import {DynamicClock} from "../../components/DynamicClock/DynamicClock";

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
          direction={"column"}
          title={'模拟样例'}
          tooltip={'用于模拟样例的展示、描述以及提供快捷入口'}
          extra={<DynamicClock />}
          headerBordered={true}
        >

        </ProCard>
      </div>
    );
  }
}