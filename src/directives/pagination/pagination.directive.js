import angular from "angular";

import template from "./pagination.template.html";
import "./pagination.style.scss";

export default angular
  .module("pagination", [])
  .directive("pagination", function () {
    return {
      restrict: "E",
      template,
      scope: {
        onChange: "=",
        page: "@",
        itemCount: "@",
      },
      controller: [
        "$scope",
        "$state",
        "localStorageService",
        "apiConstants",
        function ($scope, $state, localStorageService, apiConstants) {
          $scope.pageIndex = localStorageService.get("pageIndex") || 1;

          $scope.currentPageNumber = Number($state.params.page || 1);

          $scope.$watch("currentPageNumber", (newValue) => {
            $scope.onChange(newValue);
          });

          $scope.$watch("pageIndex", (newValue) => {
            localStorageService.set("pageIndex", newValue);
          });

          $scope.$watch("itemCount", (newVal) => {
            $scope.itemCount = newVal;
            $scope.lastPage = Math.ceil(
              $scope.itemCount / apiConstants.ARTICLE_LIMIT
            );
          });

          $scope.max = Math.max;
          $scope.min = Math.min;
          $scope.ceil = Math.ceil;
        },
      ],
    };
  }).name;
