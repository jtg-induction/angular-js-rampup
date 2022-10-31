import angular from "angular";
import "bootstrap";
import "@uirouter/angularjs";
import "angular-local-storage";
import _ from "lodash";
import restangular from "restangular";

import services from "@Services";
import components from "./components";
import views from "./views";
import directives from "./directives";
import constants from "./common/constants";
import "./common/styles/main.scss";
import routes from "./app.routes";

const appName = "articleApp";

angular
  .module(appName, [
    views,
    components,
    constants,
    services,
    directives,
    "ui.router",
    "LocalStorageModule",
    restangular,
  ])
  .config(routes)
  .config([
    "$locationProvider",
    "RestangularProvider",
    "apiConstants",
    ($locationProvider, RestangularProvider, apiConstants) => {
      $locationProvider.html5Mode(true);

      RestangularProvider.setBaseUrl(apiConstants.BASE_URL);
      RestangularProvider.setFullResponse(true);
    },
  ])
  .run([
    "$rootScope",
    "utilService",
    "$trace",
    "$transitions",
    ($rootScope, utilService, $trace, $transitions) => {
      $rootScope.isLoggedIn = !_.isEmpty(utilService.getUser());

      $trace.enable("TRANSITION"); // dev usage - to trace state changes

      $transitions.onStart({ to: "login" }, function (trans) {
        if ($rootScope.isLoggedIn) {
          return trans.router.stateService.target("home");
        }
      });

      $transitions.onStart(
        { to: ["home", "createArticle", "articleDetail"] },
        function (trans) {
          if (!$rootScope.isLoggedIn) {
            return trans.router.stateService.target("login");
          }
        }
      );
    },
  ]);

/**
 Manually start up the angular application by providing root module to
 the document
 */
angular.element(document).ready(() => {
  angular.bootstrap(document, [appName], { strictDi: true });
});
