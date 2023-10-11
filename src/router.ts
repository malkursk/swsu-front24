import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/viewMain.vue') 
  },    
  {
    path: '/facult',
    name: 'facult',
    component: () => import('@/views/viewFacultet.vue') 
  },   
  {
    path: '/work/:groupName?',
    name: 'work',
    component: () => import('@/views/viewWork.vue') 
  },    
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  next();
});

export default router
