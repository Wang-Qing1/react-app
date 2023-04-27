// routes.js

import {getUid} from "./utils/utils";
import Home from "./page/Home/Home";
import About from "./page/About/About";

/**
 * 页面跳转路由配置
 */
const PageRoutes = [
  {
    uid: getUid('route'),
    path: '/',
    element: <Home />,
  },
  {
    uid: getUid('route'),
    path: '/about',
    element: <About />,
  }
];

/**
 * 路径与表示意义的映射
 *  用于在各个页面中构建路由Link
 */
const PathMapping = {
  home: {
    title: '首页',
    path: '/',
  },
  about: {
    title: '关于',
    path: '/about',
  }
}

export { PageRoutes, PathMapping };