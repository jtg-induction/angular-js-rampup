import angular from "angular";

import controller from "./home.controller";
import template from "./home.template.html";
import "./home.style.scss";

export default angular.module("home", []).component("home", {
  template,
  controller,
}).name;
