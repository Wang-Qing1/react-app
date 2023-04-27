// AppFrame.js
import React from "react";
import './AppFrame.css';
import {Layout} from "antd";
import AppHeader from "./AppHeader/AppHeader";
import AppContent from "./AppContent/AppContent";

/**
 * 项目 - 主框架
 */
export default class AppFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,

    }
  }

  render() {
    return (
      <Layout className={'app-frame'}>
        <AppHeader />
        <AppContent />
      </Layout>
    );
  }
}