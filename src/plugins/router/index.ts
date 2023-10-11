import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import  useRootStore  from '@/store/schedule/index';
import pinia from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/schedule/index.vue') 
  },   
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const rootStore = useRootStore(pinia())
  console.log(to, from)
  next();
});

export default router
