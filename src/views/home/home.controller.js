export default ['$scope', 'articleService', 'localStorageService', 'apiConstants', function ($scope, articleService, localStorageService, apiConstants) {

    $scope.isLoading = true;

    $scope.authorSearchText = localStorageService.get('authorSearchText');
    $scope.tagSearchText = localStorageService.get('tagSearchText');

    $scope.articleQueryParams = {
        limit: apiConstants.ARTICLE_LIMIT,
        tag: localStorageService.get('tagSearchText'),
        author: localStorageService.get('authorSearchText'),
    };

    $scope.handlePageChange = (pageValue) => {
        $scope.articleQueryParams.offset = apiConstants.ARTICLE_LIMIT * (pageValue - 1);

        articleService.getArticles(
            $scope.articleQueryParams
        ).then(successCallBack, errorCallBack);
    }

    $scope.filterByAuthor = () => {
        $scope.articleQueryParams.offset = undefined;
        $scope.articleQueryParams.tag = $scope.tagSearchText;
        $scope.articleQueryParams.author = $scope.authorSearchText;
        $scope.isLoading = true;
        articleService.getArticles($scope.articleQueryParams).then(successCallBack, errorCallBack);
        localStorageService.set('authorSearchText', $scope.authorSearchText);
    }

    $scope.removeAuthorFilter = () => {
        $scope.isLoading = true;
        localStorageService.remove('authorSearchText');
        $scope.articleQueryParams.author = undefined;
        $scope.authorSearchText = '';
        articleService.getArticles($scope.articleQueryParams).then(successCallBack, errorCallBack);
    }

    $scope.filterByTag = () => {
        $scope.articleQueryParams.offset = undefined;
        $scope.articleQueryParams.author = $scope.authorSearchText;
        $scope.articleQueryParams.tag = $scope.tagSearchText;
        $scope.isLoading = true;
        articleService.getArticles($scope.articleQueryParams).then(successCallBack, errorCallBack);
        localStorageService.set('tagSearchText', $scope.tagSearchText);
    }

    $scope.removeTagFilter = () => {
        $scope.isLoading = true;
        localStorageService.remove('tagSearchText');
        $scope.articleQueryParams.tag = undefined;
        $scope.tagSearchText = '';
        articleService.getArticles($scope.articleQueryParams).then(successCallBack, errorCallBack);
    }

    const successCallBack = (response) => {
        $scope.isLoading = false;
        $scope.articleData = response.data.articles;
        $scope.itemCount = response.data.articlesCount;
    }

    const errorCallBack = () => {
        $scope.isLoading = false;
        $scope.articleData = null;
    }

}]
