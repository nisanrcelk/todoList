import Vue from "vue"
import VueRouter from "vue-router"
import TodoList from "./pages/TodoList"
import Login from "./pages/login"
import store from "./store";

Vue.use(VueRouter)

export const router=new VueRouter({
  routes:[
    { path: "/list",component: TodoList},

    //beforeEnter(to,from,next){
    //if(store.getters.Islogin){ next() }
    //else { next(/)}
    // yukarıdaki method tanımlanmalı diğer sayfaya giriş  için ama loginde post işlemim gerçekleşmedi.

    { path:"/",component:Login}
  ],
  mode:"history"
})
