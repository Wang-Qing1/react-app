// App.js
import React from "react";
import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";

/**
 * 项目主文件
 */
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
    }
  }

  render() {
    return (
      <div className={"app"}>
        <BrowserRouter>
          {/* 指定跳转的组件，to 用来配置路由地址 */}
          <NavLink to={'/'}>首页</NavLink>
          <NavLink to={'/about'}>关于</NavLink>

          {/* 路由出口：路由对应的组件会在这里进行渲染 */}
          <Routes>
            <Route path={'/'} element={<Home />}></Route>
            <Route path={'/about'} element={<About />}></Route>
            {/* 未匹配到path路径重定向到首页 */}
            <Route path={'*'} element={<Navigate to={'/'}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
