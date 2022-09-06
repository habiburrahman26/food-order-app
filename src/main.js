import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import route from "./route";
import store from "./store";
import Button from "./components/Button.vue";

const app = createApp(App);

app.use(route);
app.use(store);
app.component('ButtonComponent',Button);

app.mount("#app");
