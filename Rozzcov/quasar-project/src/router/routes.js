const routes = [
  {
    path: "/page",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/ManagementPanel",
        component: () => import("pages/technical/ManagementPanel.vue"),
        meta: { title: "Управление Заданием (АДМИН)", showHeader: true },
      },
      {
        path: "/subscriptionApp",
        component: () => import("pages/technical/subscriptionApp.vue"),
        meta: { title: "ПОДПИСКА (АДМИН)", showHeader: true },
      },
      {
        path: "/UsersApp",
        component: () => import("pages/technical/UsersApp.vue"),
        meta: { title: "ПОЛЬЗОВАТЕЛИ (АДМИН)", showHeader: true },
      },
      {
        path: "/coursesApp",
        component: () => import("pages/courses/courses-app.vue"),
        meta: { title: "Теория", showHeader: true },
      },
      {
        path: "/courseApp",
        component: () => import("pages/courses/course-app.vue"),
        meta: { title: "Главная страница", showHeader: true },
      },
      {
        path: "/videoApp",
        component: () => import("pages/courses/video-app.vue"),
        meta: { title: "Главная страница", showHeader: true },
      },
      {
        path: "/themeCourse",
        component: () => import("pages/courses/theme-course.vue"),
        meta: { title: "Главная страница", showHeader: true },
      },
      {
        path: "/tests",
        component: () => import("pages/courses/tests-app.vue"),
        meta: { title: "Задания", showHeader: true },
      },
      {
        path: "/tutorship",
        component: () => import("pages/technical/tutorship-app.vue"),
        meta: { title: "Главная страница", showHeader: false },
      },
      {
        path: "/test",
        component: () => import("pages/courses/test-app.vue"),
        meta: { title: "Главная страница", showHeader: true },
      },
      {
        path: "/support",
        component: () => import("pages/technical/support-app.vue"),
        meta: { title: "Главная страница", showHeader: false },
      },
      {
        path: "/tutor-choice",
        component: () => import("pages/technical/tutor-choice.vue"),
        meta: { title: "Главная страница", showHeader: false },
      },
      {
        path: "/settings",
        component: () => import("pages/technical/SettingsAccount.vue"),
        meta: { title: "Главная страница", showHeader: false },
      },
      {
        path: "/politicaltextbook",
        component: () => import("pages/courses/PoliticalTextbook.vue"),
        meta: { title: "Главная страница", showHeader: false },
      },
      {
        path: "/test-task-app",
        component: () => import("pages/courses/test-task-app.vue"),
        meta: { title: "Главная страница", showHeader: true },
      },
      {
        path: "/testApp",
        component: () => import("pages/courses/testApp.vue"),
        meta: { title: "Главная страница", showHeader: true },
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
