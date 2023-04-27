// AppHeader.js
import React from "react";
import './AppHeader.css';
import {Layout} from "antd";
import {NavLink} from "react-router-dom";
import {PageRoutes} from "../../../routes";

/**
 * 项目 - 主框架 - 顶部
 */
export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,

    }
  }

  renderRouteItem(item) {
    let {uid, path, icon, title} = item;
    return (
      /* 指定跳转的组件，to 用来配置路由地址 */
      <NavLink key={uid} to={path} className={'page-route-nav-link'}>{icon} {title}</NavLink>
    );
  }

  render() {
    return (
      <Layout.Header className={'app-frame-header'}>
        <div className={'header-logo'}>
          LOGO
        </div>
        <div className={'header-page-route'}>
          {
            PageRoutes.map(item => this.renderRouteItem(item))
          }
        </div>
        <div className={'header-page-route-other'}>
          Other
        </div>
      </Layout.Header>
    );
  }
}