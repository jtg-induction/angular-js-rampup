import angular from 'angular';

import template from './pagination.template.html';
import './pagination.style.scss'

export default angular
    .module('pagination', [])
    .directive('pagination', function () {
        return {
            restrict: 'E',
            template,
            scope: {
                onChange: '=',
                page: '=',
                itemCount: '=',
            },
            controller: ['$scope', '$state', function ($scope, $state) {

                $scope.pageIndex = Number($state.params.page || 1);

                $scope.currentPageNumber = $scope.pageIndex;

                $scope.$watch('currentPageNumber', (newValue) => {

                    $scope.onChange(newValue);

                });

                $scope.$watch('itemCount', (newVal) => {
                    $scope.itemCount = newVal;
                })


                $scope.max = Math.max;
                $scope.min = Math.min;
                $scope.ceil = Math.ceil;
            }]
        }
    })
    .name;
