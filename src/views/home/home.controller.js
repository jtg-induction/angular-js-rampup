export default ['$scope', 'articleService', function ($scope, articleService) {

    $scope.isLoading = true;

    const successCallBack = (response) => {
        $scope.isLoading = false;
        this.articleData = response.data.articles;
    }

    const errorCallBack = () => {
        $scope.isLoading = false;
        this.articleData = null;
    }

    articleService.getArticles().then(successCallBack, errorCallBack);
}]
