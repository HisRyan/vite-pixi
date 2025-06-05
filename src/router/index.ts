import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import axios from 'axios';
import { setNewLangMessage } from '@/local/lang';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/pages/Home/Home.vue'),
        meta: { title: 'login' }
      },
      {
        path: 'start',
        name: 'start',
        component: () => import('@/pages/Start/Start.vue'),
        meta: { title: 'login' }
      },
      {
        path: 'fish',
        name: 'fish',
        component: () => import('@/pages/Fish/Fish.vue'),
        meta: { title: 'login' }
      },
      {
        path: 'park',
        name: 'park',
        component: () => import('@/pages/Park/Park.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(''),
  routes
});
// 添加全局前置守卫
router.beforeEach(async (_, _from, next) => {
  // const res = await axios.get('http://127.0.0.1:8080/translations');
  // const { data } = res;
  // const { en_GB } = data;
  // setNewLangMessage('en_GB', en_GB);
  next();
  next();
});

export default router;
