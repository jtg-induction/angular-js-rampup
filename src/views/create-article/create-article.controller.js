import loginScreenImg from '@Images/login-screen.png';

export default ['$scope', '$rootScope', 'articleService', 'utilService', '$state', 'toastService', function ($scope, $rootScope, articleService, utilService, $state, toastService) {

    $scope.isLoading = false;
    $scope.loginScreenImg = loginScreenImg;

    $scope.submitForm = () => {

        $scope.isLoading = true;

        $scope.article.tagList = typeof $scope.article.tagList === 'string' ? $scope.article.tagList.split(" ") : $scope.article.tagList;

        const successCallBack = (response) => {
            $scope.isLoading = false;

            toastService.setToastMessage('Your article has been published successfully.')
            toastService.show();

            articleService.setArticleSlug(response.data.article.slug);
            $state.go('articleDetail');
        }

        const errorCallBack = () => {
            $scope.isLoading = false;
        }

        articleService.createArticle($scope.article).then(successCallBack, errorCallBack);

    }

}];
