import { registerComponent } from "../utils/register";
import { NotFound } from "./not-found";

export function registerRoutes() {
  registerComponent("mg-not-found", NotFound);

  return [
    { path: "/", component: "mg-about", title: "About", isHidden: false },
    { path: "/record", component: "mg-record", title: "Record", isHidden: false },
    { path: "/freedom", component: "mg-freedom", title: "Freedom", isHidden: false },
    { path: "(.*)", component: "mg-not-found", title: "Not found(404)", isHidden: true },
  ];
}
