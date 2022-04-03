import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import AdminRoutes from "./routes/admin";
import Config from "./config.json";
import { ContentLoader } from "vue-content-loader";
import VueRouteMiddleware from "vue-route-middleware";
import store from "./store/store.js";

import GuestMiddleware from "./middleware/guest";

Vue.component("ContentLoader", ContentLoader);

Vue.prototype.$config = Config;


Vue.config.productionTip = false;
Vue.use(VueRouter);

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Cources from "./components/Cources.vue";
import Events from "./components/Events.vue";
import Pricing from "./components/Pricing.vue";



import Signup from "./components/Signup.vue";




var mainRoute = [
  {
    path: "/",
    name: "index",
    component: Home,
  },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/courses", component: Cources },
  { path: "/events", component: Events },
  { path: "/pricing", component: Pricing },
 
  {
    path: "/admin/signup",
    name: "admin.signup",
    component: Signup,
    meta: {
      middleware: [GuestMiddleware],
    },
  },
];

mainRoute = mainRoute.concat(AdminRoutes);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: mainRoute,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

router.beforeEach(VueRouteMiddleware({ GuestMiddleware }));

new Vue({
 
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

//createApp(App).mount("#app");
