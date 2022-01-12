import { RouteConfigEx, LayoutType, ModuleRouteConfig } from '@/router/types';

import { createAsyncComponent } from '@/common/factory/AsyncComponentFactory';
import { PAGE_LAYOUT_COMPONENT } from '@/router/constant';

const prefix = '/chart';

const layout: LayoutType = {
  path: '/chart',
  component: PAGE_LAYOUT_COMPONENT,
  meta: {
    title: '图表',
    icon: 'fund',
  },
};

const routes: RouteConfigEx[] = [
  {
    path: '/line',
    name: 'Line',
    component: () => createAsyncComponent(import('@/views/examples/charts/line/index.vue')),
    meta: {
      title: '折线图',
    },
  },
  {
    path: '/bar',
    name: 'Bar',
    component: () => createAsyncComponent(import('@/views/examples/charts/bar/index.vue')),
    meta: {
      title: '柱状图',
    },
  },
  {
    path: '/pie',
    name: 'Pie',
    component: () => createAsyncComponent(import('@/views/examples/charts/pie/index.vue')),
    meta: {
      title: '饼图',
    },
  },
  {
    path: '/map',
    name: 'Map',
    component: () => createAsyncComponent(import('@/views/examples/charts/map/index.vue')),
    meta: {
      title: '地图',
    },
  },
  {
    path: '/baidu-map',
    name: 'BaiduMapDemo',
    component: () => createAsyncComponent(import('@/views/examples/charts/baidu-map/index.vue')),
    meta: {
      title: '百度地图',
    },
  },
];

export default {
  routes: routes,
  prefix,
  layout,
} as ModuleRouteConfig;
