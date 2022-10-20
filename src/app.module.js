import angular from 'angular';
import 'bootstrap';
import '@uirouter/angularjs';
import 'angular-local-storage';

import services from '@Services';
import components from './components';
import views from './views';
import directives from './directives';
import constants from './common/constants';
import './common/styles/main.scss';
import routes from './app.routes';

const appName = 'articleApp';

angular
  .module(appName, [
    views,
    components,
    constants,
    services,
    directives,
    'ui.router',
    'LocalStorageModule'
  ])
  .config(routes)
  .config(['$locationProvider', ($locationProvider) => {
    $locationProvider.html5Mode(true);
  }])
  .run(['$rootScope', 'utilService', '$trace', '$transitions', ($rootScope, utilService, $trace, $transitions) => {
    $rootScope.isLoggedIn = Boolean(utilService.getUser());

    $trace.enable('TRANSITION'); // dev usage - to trace state changes

    $transitions.onStart({ to: 'login' }, function (trans) {
      if ($rootScope.isLoggedIn) {
        return trans.router.stateService.target('home');
      }
    });

    $transitions.onStart({ to: ['home', 'createArticle', 'articleDetail'] }, function (trans) {
      if (!$rootScope.isLoggedIn) {
        return trans.router.stateService.target('login');
      }
    });

  }]);

angular.element(document).ready(() => {
  angular.bootstrap(document, [appName], { strictDi: true });
});
