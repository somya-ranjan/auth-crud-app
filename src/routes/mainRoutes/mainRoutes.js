import React from "react";

export const guestRoutes = [
  {
    path: "/sign-in",
    name: "SignIn",
    exact: true,
    component: React.lazy(() => import("../../pages/auth/SignIn")),
  },
  {
    redirectRoute: true,
    name: "SignIn",
    path: "/sign-in",
  },
];

export const userRoutes = [
  {
    path: "/main-page",
    name: "MainPage",
    exact: true,
    component: React.lazy(() => import("../../pages/user/UserManagement")),
  },
  {
    path: "/main-page/:id",
    name: "MainPage",
    exact: true,
    component: React.lazy(() => import("../../pages/user/UserDetails")),
  },
  {
    redirectRoute: true,
    name: "MainPage",
    path: "/main-page",
  },
];
