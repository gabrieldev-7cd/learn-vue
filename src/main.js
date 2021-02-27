import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";

import HelloWorld from "./components/HelloWorld.vue";
import Login from "./components/Login.vue";
import Board from "./components/Board.vue";
import BlockGame from "./components/BlockGame.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [ 
    {
      path: '/helloworld',
      component: HelloWorld,
    },
    {
      path:'/',
      component: Login,
    },
    {
      path:'/board',
      component: Board,
    },
    {
      path:'/blockgame',
      component: BlockGame,
    }
  ],
}
);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");


/* Retirado para que deixasse o desenvolvimento mais livre;
package-jason - rules:{
  "quotes": ["error","double"],
  "indent": ["error","tab"],
  "semi": ["error","always"]
}
*/