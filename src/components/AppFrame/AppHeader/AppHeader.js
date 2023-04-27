// AppHeader.js
import React from "react";
import './AppHeader.css';
import {Layout} from "antd";
import {LinkedinOutlined} from "@ant-design/icons";

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

  render() {
    return (
      <Layout.Header className={'app-frame-header'}>
        <div className={'header-logo'}>
          <LinkedinOutlined className={'header-logo-icon'}/>INTERESTING APP
        </div>
        <div className={'header-page-route-other'}>
          Other
        </div>
      </Layout.Header>
    );
  }
}