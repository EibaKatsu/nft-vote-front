import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router/index'   // 追加

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)  // 追加
  .mount('#app')
