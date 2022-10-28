import angular from 'angular';

import template from './filter.template.html';
import './filter.style.scss'

export default angular
    .module('filter', [])
    .directive('filter', function () {
        return {
            restrict: 'E',
            template,
            scope: {
                onFilterClick: '=',
                onRemoveFilter: '=',
                searchText: '=',
                label: '@',
            },
            controller: ['$scope', function ($scope) {

                $scope.submitForm = () => {
                    $scope.onFilterClick();
                }


            }]
        }
    })
    .name;
