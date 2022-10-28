import angular from 'angular';

import template from './back-button.template.html';
import './back-button.style.scss'

export default angular
    .module('backButton', [])
    .directive('backButton', function () {
        return {
            restrict: 'E',
            template,
            link: function (scope, element) {
                element.bind('click', goBack);

                function goBack() {
                    history.back();
                    scope.$apply();
                }
            }
        }
    })
    .name;
