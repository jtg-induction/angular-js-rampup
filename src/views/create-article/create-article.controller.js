import loginScreenImg from '@Images/login-screen.png';

export default ['$scope', '$rootScope', 'articleService', 'utilService', '$state', 'modalService', function ($scope, $rootScope, articleService, utilService, $state, modalService) {

    $scope.isLoading = false;
    $scope.loginScreenImg = loginScreenImg;

    $scope.submitForm = () => {

        $scope.isLoading = true;

        $scope.article.tagList = typeof $scope.article.tagList === 'string' ? $scope.article.tagList.split(" ") : $scope.article.tagList;

        const successCallBack = () => {
            $scope.isLoading = false;
            modalService.setTitle(`Article Published`);
            modalService.setBody('Your article has been saved successfully.')
            modalService.show();
            $state.go('home');
        }

        const errorCallBack = (response) => {
            $scope.isLoading = false;
            $scope.apiError = response.data.errors;
        }

        articleService.createArticle($scope.article).then(successCallBack, errorCallBack);

    }

}];
