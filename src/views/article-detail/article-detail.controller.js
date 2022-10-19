export default ['$scope', 'articleService', function ($scope, articleService) {

    $scope.isLoading = true;

    const successCallBack = (response) => {
        $scope.isLoading = false;
        $scope.articleData = response.data.articles;
    }

    const errorCallBack = () => {
        $scope.isLoading = false;
        $scope.articleData = null;
    }

    articleService.getArticles().then(successCallBack, errorCallBack);

}]
