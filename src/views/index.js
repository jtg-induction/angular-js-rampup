import angular from 'angular';

import homeView from './home';
import loginView from './login';

export default angular
  .module('views', [
    homeView,
    loginView,
  ])
  .name;
