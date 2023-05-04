// SimpleSample.js
import React from "react";
import './SimpleSample.css'
import {ProCard} from "@ant-design/pro-components";
import {NavLink} from "react-router-dom";

/**
 * 简单样例展示、描述、入口
 */
export default class SimpleSample extends React.Component{
  render() {
    return (
      <ProCard ghost={true} direction={"row"} gutter={[8,8]} wrap={true}>
        <ProCard
          title={'水印'}
          extra={(<NavLink to={'/watermark'}>Go</NavLink>)}
          bordered={true}
          colSpan={6}
        >
          <label>水印组件在页面需要添加水印标识版权时使用！</label>
        </ProCard>
      </ProCard>
    );
  }
}