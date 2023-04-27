// About.js
import React from "react";

/**
 * 项目 - 关于
 */
export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
    }
  }

  render() {
    return (
      <div className={'app-about'}>
        关于
      </div>
    );
  }
}