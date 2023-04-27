// App.js
import React from "react";
import AppFrame from "./components/AppFrame/AppFrame";
import {BrowserRouter} from "react-router-dom";

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
          <AppFrame />
        </BrowserRouter>
      </div>
    );
  }
}
