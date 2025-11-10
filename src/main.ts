import { createApp } from "vue";
import "./scss/custom.scss";
import App from "./App.vue";
import fixOrphans from "./directives/fixOrphans";

const app = createApp(App);
app.directive("fix-orphans", fixOrphans);
app.mount("#app");
