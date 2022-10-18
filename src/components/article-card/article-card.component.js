import angular from 'angular';

import controller from './article-card.controller';
import template from './article-card.template.html';
// import './navigation.scss';

export default angular
    .module('articleCard', [])
    .component('articleCard', {
        template,
        bindings: {
            article: '='
        },
        controller,
    })
    .name;
