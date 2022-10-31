import angular from "angular";

import controller from "./login.controller";
import template from "./login.template.html";
import "./login.style.scss";

export default angular.module("login", []).component("login", {
  template,
  controller,
}).name;
