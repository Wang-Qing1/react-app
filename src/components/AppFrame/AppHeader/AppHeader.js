// AppHeader.js
import React from "react";
import './AppHeader.css';
import {Layout} from "antd";
import {LinkedinOutlined} from "@ant-design/icons";
import {PageRoutes} from "../../../routes";
import {NavLink} from "react-router-dom";

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

  renderItem(item) {
    let {uid, title, icon, path} = item;
    return (
      <NavLink className={'header-menu-link'} key={uid} to={path}>
        <div className={'header-menu-item'}>
          {icon}{title}
        </div>
      </NavLink>
    );
  }

  render() {
    return (
      <Layout.Header className={'app-frame-header'}>
        <div className={'header-logo'}>
          <LinkedinOutlined className={'header-logo-icon'}/>INTERESTING APP
        </div>
        <div className={'header-menu'}>
          {
            PageRoutes.map(item => this.renderItem(item))
          }
        </div>
        <div className={'header-page-route-other'}>
          Other
        </div>
      </Layout.Header>
    );
  }
}