import angular from 'angular';

import controller from './article-detail.controller';
import template from './article-detail.template.html';
import './article-detail.style.scss';

export default angular
    .module('articleDetail', [])
    .component('articleDetail', {
        template,
        controller,
        bindings: {
            article: '='
        },
    })
    .name;
