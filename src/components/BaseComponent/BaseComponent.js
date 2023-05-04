// BaseComponent.js
import React from "react";
import './BaseComponent.css';

/**
 * 示例组件 - 基础样式定义
 */
export default class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
    }
  }

  renderContent() {
    // 基础该组件的组件自定义渲染内容
  }

  render() {
    return (
      <div className={'base-component-content'}>
        {this.renderContent()}
      </div>
    );
  }
}