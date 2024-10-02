const routes = [
  {
    path: "/page",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/coursesApp",
        component: () => import("pages/courses/courses-app.vue"),
      },
      {
        path: "/courseApp",
        component: () => import("pages/courses/course-app.vue"),
      },
      {
        path: "/videoApp",
        component: () => import("pages/courses/video-app.vue"),
      },
      {
        path: "/themeCourse",
        component: () => import("pages/courses/theme-course.vue"),
      },
      {
        path: "/tests",
        component: () => import("pages/courses/tests-app.vue"),
      },
      {
        path: "/tutorship",
        component: () => import("pages/technical/tutorship-app.vue"),
      },
      { path: "/test", component: () => import("pages/courses/test-app.vue") },
      {
        path: "/support",
        component: () => import("pages/technical/support-app.vue"),
      },
      {
        path: "/tutor-choice",
        component: () => import("pages/technical/tutor-choice.vue"),
      },
      {
        path: "/settings",
        component: () => import("pages/technical/SettingsAccount.vue"),
      },
      {
        path: "/politicaltextbook",
        component: () => import("pages/courses/PoliticalTextbook.vue"),
      },
      {
        path: "/test-task-app",
        component: () => import("pages/courses/test-task-app.vue"),
      },
      {
        path: "/testApp",
        component: () => import("pages/courses/testApp.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("../pages/lending-app.vue"),
  },
  {
    path: "/register",
    component: () => import("layouts/RegisterLayout.vue"),
    children: [
      {
        path: "/login-profile",
        component: () => import("pages/register/LoginProfile.vue"),
      },
      {
        path: "/reg-profile",
        component: () => import("pages/register/RegistrationProfile.vue"),
      },
      {
        path: "/reg-confirm",
        component: () => import("pages/register/RegConfirm.vue"),
      },
      {
        path: "/succsess-reg",
        component: () => import("pages/register/SuccessReg.vue"),
      },
      {
        path: "/reg-name",
        component: () => import("pages/register/RegistrationName.vue"),
      },
      {
        path: "/payment",
        component: () => import("pages/register/PaymentApp.vue"),
      },
      {
        path: "/choose_subscription",
        component: () => import("pages/register/ChooseSub.vue"),
      },
      {
        path: "/PaymentApp",
        component: () => import("pages/register/PaymentApp.vue"),
      },
    ],
  },
];

export default routes;
