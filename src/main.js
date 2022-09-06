import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import route from "./route";

const app = createApp(App);

app.use(route);

app.mount("#app");
