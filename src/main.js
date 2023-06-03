import { Header, Main } from "./components";
import { registerComponent } from "./utils/register";

function main() {
  registerComponent("web-header", Header);
  registerComponent("web-main", Main);
}

main();
