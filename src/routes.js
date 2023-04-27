// routes.js

import {getUid} from "./utils/utils";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import {ExclamationCircleOutlined, HomeOutlined} from "@ant-design/icons";

/**
 * 页面跳转路由配置
 */
const PageRoutes = [
  {
    uid: getUid('route'),
    title: '首页',
    icon: <HomeOutlined />,
    path: '/',
    element: <Home />,
  },
  {
    uid: getUid('route'),
    title: '关于',
    icon: <ExclamationCircleOutlined />,
    path: '/about',
    element: <About />,
  }
];

export { PageRoutes };