import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../components/admin/Dashboard";
import EmployeeList from "../../src/components/admin/employee/List";
import EmployeeCreate from "../../src/components/admin/employee/Create";
import CategoryList from "../../src/components/admin/catalog/category/List";
import CategoryCreate from "../../src/components/admin/catalog/category/Create";

import EmployeeMain from "../../src/components/admin/employee/EmployeeMain";
import CatalogMain from "../../src/components/admin/catalog/CataLogMain";
import AttributeList from "../../src/components/admin/catalog/attribute/List";
import ProductList from '../components/admin/catalog/product/List';
import Login from "../components/Login.vue";



// import "../admin-webu/dist/css/adminlte.min.css";
// import "../admin-webu/plugins/font-awesome/css/font-awesome.min.css";

// import "../admin-webu/plugins/jquery/jquery.min.js";
// import "../admin-webu/plugins/bootstrap/js/bootstrap.bundle.min.js";
// import "../admin-webu/dist/js/adminlte.js";



import axios from "axios";
import AuthMiddleware from "../middleware/auth";
import GuestMiddleware from "../middleware/guest";
import Helper from "../helper/helper";
import API from "../api/api.js";


//var serverUrl = process.env.VUE_APP_SERVER_URL;
Vue.prototype.$serverUrl = process.env.VUE_APP_SERVER_URL;
Vue.prototype.$appName = "My App";
Vue.prototype.$axios = axios;
Vue.prototype.$helper = Helper;
Vue.prototype.$api = API;

// Vue.use({
//   install() {
//     Vue.helpers = Helper;
//   },
// });

Vue.use(Router);

const admin = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      middleware: [GuestMiddleware],
    },
  },
  {
    path: "/admin/dashboard",
    component: Dashboard,
    name: "admin.dashboard",
    meta: {
      middleware: [AuthMiddleware],
    },
  },
  {
    path: "/admin/catalog",
    component: CatalogMain,
    name: "admin.catalog",
    meta: {
      middleware: [AuthMiddleware],
    },
    children: [
      {
        path: "category",
        component: CategoryList,
        name: "admin.catalog.category",
        meta: {
          middleware: [AuthMiddleware],
        },
      },
      {
        path: "category/create",
        component: CategoryCreate,
        name: "admin.catalog.category.create",
        meta: {
          middleware: [AuthMiddleware],
        },
      },
      {
        path: "attribute",
        component: AttributeList,
        name: "admin.catalog.attribute",
        meta: {
          middleware: [AuthMiddleware],
        },
      },
      {
        path: "product",
        component: ProductList,
        name: "admin.catalog.product",
        meta: {
          middleware: [AuthMiddleware],
        },
      },
    ],
  },

  {
    path: "/admin/employee",
    name: "admin.employee.list",
    component: EmployeeMain,
    meta: {
      middleware: [AuthMiddleware],
    },
    children: [
      {
        path: "create",
        name: "admin.employee.create",
        component: EmployeeCreate,
        meta: {
          middleware: [AuthMiddleware],
        },
      },
      {
        path: "employee-list",
        name: "admin.employee.employee-list",
        component: EmployeeList,
        meta: {
          middleware: [AuthMiddleware],
        },
      },
      {
        path: "task-list",
        name: "admin.employee.tasklist",
        component: EmployeeCreate,
        meta: {
          middleware: [AuthMiddleware],
        },
      },
    ],
  },
];

export default admin;
