import Vue from 'vue'
import App from './App.vue'
 
import VueTailSelect from "./VueTailSelect";

Vue.use(VueTailSelect)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
