// routes.js

import {getUid} from "./utils/utils";
import {ExclamationCircleOutlined, HomeOutlined} from "@ant-design/icons";
import Home from "./page/Home/Home";
import About from "./page/About/About";

/**
 * 页面跳转路由配置
 */
const PageRoutes = [
  {
    uid: getUid('route'),
    path: '/',
    title: '首页',
    icon: <HomeOutlined />,
    element: <Home />,
  },
  {
    uid: getUid('route'),
    path: '/about',
    title: '关于',
    icon: <ExclamationCircleOutlined />,
    element: <About />,
  }
];

export { PageRoutes };