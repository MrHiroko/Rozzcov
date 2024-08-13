
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
      //{ path: '/test-task-1', component: () => import('pages/task/test-task-1.vue') },
      //{ path: '/test-task-2', component: () => import('pages/task/test-task-2.vue') },
      //{ path: '/test-task-3', component: () => import('pages/task/test-task-3.vue') },
      //{ path: '/test-task-4', component: () => import('pages/task/test-task-4.vue') },
      { path: '/settings', component: () => import('pages/SettingsAccount.vue') },
      { path: '/politicaltextbook', component: () => import('pages/PoliticalTextbook.vue') },
      { path: '/test-task-app', component: () => import('pages/test-task-app.vue') },
    ]
  },

]

export default routes