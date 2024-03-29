import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../src/scss/main.scss";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far  } from '@fortawesome/free-regular-svg-icons'

// // global filter => orgnization
// import "../src/filter.js";
// Vue.filter("sub", function (text) {
//   return text.substring(0, 35) + "...";
// });



/* add icons to the library */
library.add(fas,fab,far )

createApp(App)
.use(store)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
