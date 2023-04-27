import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {ConfigProvider} from "antd";
import zhCN from 'antd/es/locale/zh_CN'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);