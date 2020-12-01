import Vue from 'vue'
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
/* Routes */
import Home from "./components/pages/Home.vue";
import SignUp from "./components/pages/SignUp.vue";
import SignIn from "./components/pages/SignIn.vue";
import Questions from "./components/pages/Questions.vue";
import AddQuestion from "./components/pages/AddQuestion.vue";
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Toasted, {
  duration : 5000
})
const routes = [
  { path: '/', component: Home },
  { path: '/SignUp', component: SignUp },
  { path: '/SignIn', component: SignIn },
  { path: '/Questions', component: Questions },
  { path: '/AddQuestion', component: AddQuestion },
]
const router = new VueRouter({
  routes 
})

new Vue({  
  router: router,
  render: h => h(App),
}).$mount('#app')
