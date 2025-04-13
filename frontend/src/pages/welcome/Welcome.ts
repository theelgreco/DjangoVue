import "vite/modulepreload-polyfill"
import "@/assets/main.css"
import "primevue/resources/themes/aura-light-blue/theme.css"

// @ts-ignore
import Aura from "@/presets/aura"
import Primevue from "primevue/config"
import {createApp} from "vue";
import App from "./Welcome.vue"

const app = createApp(App)

app.use(Primevue, {
    pt: Aura
})

app.mount("#app")