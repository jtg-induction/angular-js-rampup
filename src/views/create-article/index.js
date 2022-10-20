import angular from 'angular';

import controller from './create-article.controller';
import template from './create-article.template.html';
import './create-article.style.scss';

export default angular
  .module('createArticle', [])
  .component('createArticle', {
    template,
    controller,
  })
  .name;
