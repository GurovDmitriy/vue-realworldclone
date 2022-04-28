import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./filters"
// import SvgSprite from "vue-svg-sprite"
import "./assets/styles/main.scss"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // SvgSprite,
  render: (h) => h(App),
}).$mount("#app")
