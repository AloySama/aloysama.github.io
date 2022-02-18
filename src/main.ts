import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faFontAwesome} from '@fortawesome/free-brands-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(fas)
library.add(fab)
library.add(faFontAwesome)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router).mount('#app')
