import { Router } from "@vaadin/router";
import { Header } from "./components";
import { registerComponent } from "./utils/register";
import { registerRoutes } from "./pages/routes";

function main() {
  registerComponent("mg-header", Header);
  const router = new Router(document.querySelector("mg-outlet"));
  router.setRoutes(registerRoutes());
}

main();
