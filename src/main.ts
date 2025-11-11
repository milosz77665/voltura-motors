import { createApp } from "vue";
import "./scss/custom.scss";
import App from "./App.vue";
import fixOrphans from "./directives/fixOrphans";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);
app.directive("fix-orphans", fixOrphans);
app.mount("#app");
