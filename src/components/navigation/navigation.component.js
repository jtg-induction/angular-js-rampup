import angular from 'angular';

import controller from './navigation.controller';
import template from './navigation.template.html';
import './navigation.style.scss';

export default angular
  .module('navigation', [])
  .component('navigation', {
    template,
    controller
  })
  .name;
