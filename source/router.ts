import { Router } from "retend/router";
import App from "./App";
import RippleEffect from "./RippleEffect";

export function createRouter() {
  return new Router({
    routes: [
      { path: "/", component: App },
      { path: "/ripple-effect", component: RippleEffect },
    ],
  });
}
