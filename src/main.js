import Vue from 'vue'
import App from './App.vue'

// import TailSelect from 'tail.select'
// Vue.prototype.$tailSelect = TailSelect;
// import "~tail.select/css/default/tail.select-light"
// import "./assets/main.scss"

import VueTailSelect from "./VueTailSelect";

Vue.use(VueTailSelect)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
