// Home.js
import React from "react";

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
        首页
      </div>
    );
  }
}