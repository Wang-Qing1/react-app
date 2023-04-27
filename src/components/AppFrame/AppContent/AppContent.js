// AppContent.js
import React from "react";
import './AppContent.css';
import {Layout} from "antd";
import {Navigate, Route, Routes} from "react-router-dom";
import {PageRoutes} from "../../../routes";

/**
 * 项目 - 主框架 - 内容
 */
export default class AppContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,

    }
  }

  renderRouteEle(item) {
    let {uid, path, element} = item;
    return (
      <Route key={uid} path={path} element={element} />
    );
  }

  render() {
    return (
      <Layout.Content className={'app-frame-content'}>
        {/* 路由出口：路由对应的组件会在这里进行渲染 */}
        <Routes>
          {
            PageRoutes.map(item => this.renderRouteEle(item))
          }
          {/* 未匹配到path路径重定向到首页 */}
          <Route path={'*'} element={<Navigate to={'/'}/>} />
        </Routes>
      </Layout.Content>
    );
  }
}