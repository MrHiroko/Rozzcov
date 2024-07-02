
const routes = [
  {
    path: '/',
    component: () => import('layouts/quick-menu.vue'),
    children: [
      { path: '', component: () => import('pages/courses-app.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/quick-menu.vue'),
    children: [
      { path: '/courseApp', component: () => import('pages/course-app.vue') },
      { path: '/videoApp', component: () => import('pages/video-app.vue') },
      { path: '/themeCourse', component: () => import('pages/theme-course.vue') },
      { path: '/tests', component: () => import('pages/tests-app.vue') },
    ]
  },

]

export default routes