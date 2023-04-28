// routes.js

import {getUid} from "./utils/utils";
import Home from "./page/Home/Home";
import About from "./page/About/About";

/**
 * 简单样例
 */
const SimpleSampleRoutes = [

];
/**
 * 复杂样例
 */
const ComplexSampleRoutes = [

];
/**
 * 图表样例
 */
const ChartSampleRoutes = [

];

/**
 * 页面跳转路由配置
 */
const PageRoutes = [
  {
    uid: getUid('route'),
    title: '首页',
    path: '/',
    element: <Home />,
  },
  {
    uid: getUid('route'),
    title: '关于',
    path: '/about',
    element: <About />,
  },
  ...SimpleSampleRoutes,
  ...ComplexSampleRoutes,
  ...ChartSampleRoutes,
];

export { PageRoutes, SimpleSampleRoutes, ComplexSampleRoutes, ChartSampleRoutes };