// AppContent.js
import React from "react";
import './AppContent.css';
import {Layout} from "antd";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../../../page/Home/Home";
import About from "../../../page/About/About";

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

  render() {
    return (
      <Layout.Content className={'app-frame-content'}>
        {/* 路由出口：路由对应的组件会在这里进行渲染 */}
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/about'} element={<About />}></Route>
          {/* 未匹配到path路径重定向到首页 */}
          <Route path={'*'} element={<Navigate to={'/'}/>} />
        </Routes>
      </Layout.Content>
    );
  }
}