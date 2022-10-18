import angular from 'angular';

import homeView from './home/home.view';
import loginView from './login/login.view';

export default angular
  .module('views', [
    homeView,
    loginView,
  ])
  .name;
