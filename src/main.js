import { Router } from "@vaadin/router";
import { Header } from "./components";
import { registerComponent } from "./utils/register";
import { registerRoutes } from "./pages/routes";

export const GLOBAL_APP_STORE = {
  routes: [],
};

function setupRoutes(root) {
  const routes = registerRoutes();
  const router = new Router(document.querySelector(root));
  router.setRoutes(routes);
  GLOBAL_APP_STORE.routes = routes;
}

function main() {
  setupRoutes("mg-outlet");
  registerComponent("mg-header", Header);
}

main();
