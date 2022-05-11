import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";

import Home from "@/views/home/Home.vue";
import MusicList from "@/views/musicList/MusicList.vue";
import MusicDetail from "@/views/musicDetail/MusicDetail.vue";
import Search from "@/views/search/Search.vue";
import SearchEnd from "@/views/searchEnd/SearchEnd.vue";
import Login from "@/views/login/Login.vue";
import Phone from "@/views/login/childComps/Phone.vue";
import Register from "@/views/login/childComps/Register.vue";
import Me from "@/views/me/Me.vue";

const routes = [
  {
    path: "",
    redirect: "/find",
  },
  {
    path: "/find",
    component: Home,
  },
  {
    path: "/musiclist",
    component: MusicList,
  },
  {
    path: "/musicdetail",
    component: MusicDetail,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/searchend",
    component: SearchEnd,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/login/phone",
    component: Phone,
  },
  {
    path: "/login/register",
    component: Register,
  },
  {
    path: "/me",
    component: Me,
    // 路由守卫
    beforeEnter: (to, from, next) => {
      //判断user是否登录,没登陆则跳转到login界面
      if (store.state.user.isLogin) {
        next();
      } else {
        next("login");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
