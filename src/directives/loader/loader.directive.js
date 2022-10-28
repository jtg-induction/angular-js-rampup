import angular from 'angular';
import $ from 'jquery';

import template from './loader.template.html';
import './loader.style.scss'

export default angular
    .module('loader', [])
    .directive('loader', function () {
        return {
            restrict: 'E',
            template,
            scope: {
                topOffset: '@'
            },
            controller: ['$scope', ($scope) => {
                $('#loader').css('top', `${$scope.topOffset}px`);
            }]
        }
    })
    .name;
