
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */



window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let navbar = require('./components/inc/navbar.vue');
let footer = require('./components/inc/footer.vue');

let home = require('./components/pages/home.vue');
let ingredients = require('./components/pages/ingredients.vue');
let meals = require('./components/pages/meals.vue');
let tables = require('./components/pages/tables.vue');
let categories = require('./components/pages/categories.vue');

const routes = [
    { path: '/home', component: home },
    { path: '/ingredients', component: ingredients },
    { path: '/meals', component: meals },
    { path: '/tables', component: tables },
    { path: '/categories', component: categories }, 
  ]

  const router = new VueRouter({
      routes ,     
   mode:'history',
  })

const app = new Vue({
    el: '#app',
    router,
    components:{navbar,footer}
});
