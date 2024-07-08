
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
      { path: '/tutorship', component: () => import('pages/tutorship-app.vue') },
      { path: '/test', component: () => import('pages/test-app.vue') },
      { path: '/support', component: () => import('pages/support-app.vue') },
      { path: '/tutor-choice', component: () => import('pages/tutor-choice.vue') },
      { path: '/settings', component: () => import('pages/SettingsAccount.vue') },
    ]
  },

]

export default routes