import { registerComponent } from "../utils/register";
import { NotFound } from "./not-found";

export function registerRoutes() {
  registerComponent("mg-not-found", NotFound);

  return [
    { path: "/", component: "mg-about", title: "Music generator | About" },
    { path: "/record", component: "mg-record", title: "Music generator | Record" },
    { path: "/freedom", component: "mg-freedom", title: "Music generator | Freedom" },
    { path: "(.*)", component: "mg-not-found" },
  ];
}
