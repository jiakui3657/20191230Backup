import Vue from "vue";
import VueRouter from "vue-router";
import VueCookies from "vue-cookies";
import Home from "../views/Home.vue";
import Classify from "../views/Classify.vue";
import Login from "../views/Login.vue";
import AddSalesman from "../views/AddSalesman.vue";
import VipMembers from "../views/VipMembers.vue";
import CreateBranches from "../views/CreateBranches.vue";
import BranchesDetails from "../views/BranchesDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/classify",
    name: "classify",
    component: Classify
  },
  {
    path: "/vipMembers",
    name: "vipMembers",
    component: VipMembers
  },
  {
    path: "/createBranches",
    name: "createBranches",
    component: CreateBranches
  },
  {
    path: "/branchesDetails",
    name: "branchesDetails",
    component: BranchesDetails
  },
  {
    path: "/near",
    name: "near",
    component: () => import(/* webpackChunkName: "near" */ "../views/Near.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue")
  },
  {
    path: "/we",
    name: "we",
    component: () => import(/* webpackChunkName: "we" */ "../views/We.vue")
  },
  {
    path: "/addSalesman",
    name: "addSalesman",
    component: AddSalesman
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, form, next) => {
  window.console.log(VueCookies.get("login"));
  if (to.path == "/" || to.path == "/login") {
    if (VueCookies.get("login") && VueCookies.get("login").userToken) {
      next("/home");
    } else {
      next();
    }
  } else if (VueCookies.get("login") && VueCookies.get("login").userToken) {
    next();
  } else {
    next("/");
  }
});

export default router;
